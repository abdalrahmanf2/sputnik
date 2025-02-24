import {
	createKindeServerClient,
	GrantType,
	type SessionManager,
	type UserType,
	GetOrganizationsUserRolesResponse
} from "@kinde-oss/kinde-typescript-sdk";
import { type Context } from "hono";
import { getCookie, setCookie, deleteCookie } from "hono/cookie";
import { createFactory } from "hono/factory";

const KINDE_DOMAIN = process.env.KINDE_DOMAIN;
const KINDE_CLIENT_ID = process.env.KINDE_CLIENT_ID;
const KINDE_CLIENT_SECRET = process.env.KINDE_CLIENT_SECRET;
const KINDE_REDIRECT_URI = process.env.KINDE_REDIRECT_URI;
const KINDE_LOGOUT_REDIRECT_URI = process.env.KINDE_LOGOUT_REDIRECT_URI;

if (!KINDE_DOMAIN || !KINDE_CLIENT_ID || !KINDE_CLIENT_SECRET || !KINDE_REDIRECT_URI || !KINDE_LOGOUT_REDIRECT_URI) {
	throw new Error(
		"Missing required Kinde environment variables.  Please ensure KINDE_DOMAIN, KINDE_CLIENT_ID, KINDE_CLIENT_SECRET, KINDE_REDIRECT_URI, and KINDE_LOGOUT_REDIRECT_URI are set."
	);
}

// Client for authorization code flow
export const kindeClient = createKindeServerClient(GrantType.AUTHORIZATION_CODE, {
	authDomain: KINDE_DOMAIN,
	clientId: KINDE_CLIENT_ID,
	clientSecret: KINDE_CLIENT_SECRET,
	redirectURL: KINDE_REDIRECT_URI,
	logoutRedirectURL: KINDE_LOGOUT_REDIRECT_URI
});

export const sessionManager = (c: Context): SessionManager => ({
	async getSessionItem(key: string) {
		return getCookie(c, key);
	},
	async setSessionItem(key: string, value: unknown) {
		const cookieOptions = {
			httpOnly: true,
			secure: true,
			sameSite: "Lax"
		} as const;
		setCookie(c, key, typeof value === "string" ? value : JSON.stringify(value), cookieOptions);
	},
	async removeSessionItem(key: string) {
		deleteCookie(c, key);
	},
	async destroySession() {
		["id_token", "access_token", "user", "refresh_token"].forEach((key) => {
			deleteCookie(c, key);
		});
	}
});

type Env = {
	Variables: {
		user: UserType;
	};
};

const factory = createFactory<Env>();
//middleware to get user profile
export const getUser = factory.createMiddleware(async (c, next) => {
	try {
		const isAuthenticated = await kindeClient.isAuthenticated(sessionManager(c));

		if (!isAuthenticated) {
			return c.json({ error: "Unauthorized" }, 401);
		}
		const user = await kindeClient.getUserProfile(sessionManager(c));
		c.set("user", user);
		await next();
	} catch (e) {
		console.error(e);
		return c.json({ error: "Unauthorized" }, 401);
	}
});

export const requireAdmin = factory.createMiddleware(async (c, next) => {
	try {
		const isAuthenticated = await kindeClient.isAuthenticated(sessionManager(c));

		if (!isAuthenticated) {
			return c.json({ error: "Unauthorized" }, 401);
		}

		const user = await kindeClient.getUserProfile(sessionManager(c));
		const { permissions } = await kindeClient.getPermissions(sessionManager(c));

		if (!permissions || !permissions.includes("view:dashboard")) {
			return c.json({ error: "Forbidden: Admins Only" }, 403);
		}

		c.set("user", user);
		await next();
	} catch (e) {
		console.error(e);
		return c.json({ error: "Unauthorized" }, 401);
	}
});
//I need to connect db 1st to check course access
// export const checkCourseAccess = factory.createMiddleware(async (c, next) => {
//   try {
//     const user = c.var.user;
//     if (!user) {
//       return c.json({ error: "Unauthorized" }, 401);
//     }

//     const { permissions } = await kindeClient.getPermissions(sessionManager(c));

//     if (!permissions || !permissions.includes("view:courses")) {
//       return c.json({ error: "Forbidden: No course access" }, 403);
//     }

//     const courseId = c.req.param("courseId");
//     const purchasedCourses = await getUserPurchasedCourses(user.id);//I need to connect db 1st to get user purchased courses

//     if (!purchasedCourses.includes(courseId)) {
//       return c.json({ error: "Forbidden: You have not purchased this course" }, 403);
//     }

//     await next();
//   } catch (e) {
//     console.error(e);
//     return c.json({ error: "Unauthorized" }, 401);
//   }
// });

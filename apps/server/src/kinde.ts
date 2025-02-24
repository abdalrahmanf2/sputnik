import {
	createKindeServerClient,
	GrantType,
	type SessionManager,
	type UserType
} from "@kinde-oss/kinde-typescript-sdk";
import { type Context } from "hono";
import { getCookie, setCookie, deleteCookie } from "hono/cookie";
import { createFactory,createMiddleware } from "hono/factory";

// Client for authorization code flow
export const kindeClient = createKindeServerClient(GrantType.AUTHORIZATION_CODE, {
	authDomain: process.env.KINDE_DOMAIN!,
	clientId: process.env.KINDE_CLIENT_ID!,
	clientSecret: process.env.KINDE_CLIENT_SECRET!,
	redirectURL: process.env.KINDE_REDIRECT_URI!,
	logoutRedirectURL: process.env.KINDE_LOGOUT_REDIRECT_URI!
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


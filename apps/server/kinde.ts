import { createKindeServerClient, GrantType, type SessionManager, type UserType, GetOrganizationsUserRolesResponse} from "@kinde-oss/kinde-typescript-sdk";
import { type Context } from "hono";
import { getCookie, setCookie, deleteCookie } from "hono/cookie";
import { createFactory, createMiddleware } from 'hono/factory';
import { Hono } from "hono";
// Client for authorization code flow
export const kindeClient = createKindeServerClient(GrantType.AUTHORIZATION_CODE, {
  authDomain: process.env.KINDE_DOMAIN!,
  clientId: process.env.KINDE_CLIENT_ID!,
  clientSecret: process.env.KINDE_CLIENT_SECRET!,
  redirectURL: process.env.KINDE_REDIRECT_URL!,
  logoutRedirectURL: process.env.KINDE_LOGOUT_REDIRECT_URL!,
});

export const sessionManager = (c: Context): SessionManager => ({
  async getSessionItem(key: string) {
    return getCookie(c, key);
  },
  async setSessionItem(key: string, value: unknown) {
    const cookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: "Lax",
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
  },
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
    const {permissions} = await kindeClient.getPermissions(sessionManager(c));

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



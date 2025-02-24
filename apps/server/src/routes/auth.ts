import { Hono } from "hono";
import { kindeClient, requireAdmin, sessionManager } from "../kinde";
import { getUser } from "../kinde";
export const authRoutes = new Hono()
	.get("/login", async (c) => {
		const loginUrl = await kindeClient.login(sessionManager(c));
		return c.redirect(loginUrl.toString());
	})
	.get("/register", async (c) => {
		const registerUrl = await kindeClient.register(sessionManager(c));
		return c.redirect(registerUrl.toString());
	})
	.get("/callback", async (c) => {
		//called everytime we login or register
		const url = new URL(c.req.url);
		await kindeClient.handleRedirectToApp(sessionManager(c), url);
		return c.redirect("/");
	})
	.get("/logout", async (c) => {
		const logoutUrl = await kindeClient.logout(sessionManager(c));
		return c.redirect(logoutUrl.toString());
	})
	.get("/me", getUser, async (c) => {
		const user = c.var.user;
		return c.json({ user });
	})
	.get("/dashboard", getUser, requireAdmin, async (c) => {
		return c.json({ message: "Welcome, Admin!" });
	});
//I need to connect db 1st
// .get("/courses/:courseId", getUser, checkCourseAccess, async (c) => {
//   const courseId = c.req.param("courseId");
//   return c.json({ message: `Welcome to course ${courseId}`, user: c.var.user });
// });

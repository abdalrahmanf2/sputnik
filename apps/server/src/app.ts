import { Hono } from "hono";
import { authRoutes } from "./routes/auth";

const app = new Hono();

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

const apiRoutes = app.basePath("/api").route("/", authRoutes);

export default app;

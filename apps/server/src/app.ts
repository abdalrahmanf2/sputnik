import { Hono } from "hono";
import { logger } from 'hono/logger'
import { courses_route } from './routes/courses'


const app = new Hono();

app.use('*', logger())

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/courses", courses_route);
export default app;

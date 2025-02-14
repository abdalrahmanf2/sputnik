import { Hono } from "hono";
import { db } from "../db";
import {courses as coursesTable,} from "../db/schema";

export const courses_route = new Hono()
  .get("/", async (c) => {
    const courses = await db
      .select()
      .from(coursesTable)
      .limit(100);

    return c.json({ courses: courses });
  })
 
  .post("/", async (c) => {
  const course = await c.req.json();

  const result = await db
    .insert(coursesTable)
    .values(course)
    .returning()
    .then((res) => res[0]);

  c.status(201);
  return c.json(result);
});

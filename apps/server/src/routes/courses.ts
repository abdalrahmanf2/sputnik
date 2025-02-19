import { Hono } from "hono";
import { db } from "../db";
import {courses_table as coursesTable, insertCourseSchema} from "../db/schema";
import { zValidator } from "@hono/zod-validator";
import { createCourse } from "../queries/insert";
import { getCourseByID, getCourseByTitle } from "../queries/select";
import { deleteCourseById, deleteCourseByTitle } from "../queries/delete";

export const courses_route = new Hono()
  .get("/", async (c) => {
    const courses = await db
      .select()
      .from(coursesTable)
      .limit(100);

    return c.json({ courses: courses });
  })
  
  .post("/", zValidator("json", insertCourseSchema), async (c) => {

    console.log("Handler reached!"); // Debug log
    const course = await c.req.valid("json");
    await createCourse(course); 
    c.status(201);
    return c.json({ message: 'User created successfully'});
  })

  .get("/:id", async (c) => {
    const id = Number.parseInt(c.req.param("id"));
    const courses = await getCourseByID(id);
    if (!courses || courses.length === 0)
    {
      return c.json({ message: "Course not found" }, 404);
    }
    return c.json({ courses: courses });
  })

  .get("/title/:title", async (c) => {
    const title = c.req.param("title");
    const course = await getCourseByTitle(title);
    if (!course)
    {
      return c.json({ message: "Course not found" }, 404);
    }
    return c.json({ course: course });
  })    

  .delete("/:id", async (c) => {
    const id = Number.parseInt(c.req.param("id"));
    const deleted = await deleteCourseById(id);
    if (!deleted)
    {
      return c.json({ message: "Course not found" }, 404);
    }
    return c.json({ message: 'Course deleted successfully' });
  })

  .delete("/title/:title", async (c) => {
    const title = c.req.param("title");
    const deleted = await deleteCourseByTitle(title);;
    if (!deleted)
    {
      return c.json({ message: "Course not found" }, 404);
    }
    return c.json({ message: 'Course deleted successfully' });
  });


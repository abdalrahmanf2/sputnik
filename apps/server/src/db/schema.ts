import { pgTable,text, serial, numeric, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from "zod";

// export const courses = pgTable(
//   "courses",
//   {
//     id: serial("id").primaryKey(), // Auto-incrementing primary key
//     courseId: text("course_id").notNull(),
//     title: text("title").notNull(),
//     description: text("description"),
//     instructorId: text("instructor_id").notNull(),
//     category: text("category"),  // e.g., "Astronomy", "Math", "Programming"
//     level: text("level"),  // e.g., "beginner", "intermediate", "advanced"
//     price: numeric("price", { precision: 10, scale: 2 }),  // Numeric with up to 2 decimal places
//     duration: text("duration"),  // e.g., "5 hours", "3 weeks"
//     rating: numeric("rating", { precision: 3, scale: 2 }),  // Average rating, e.g., 4.5
//     createdAt: timestamp("created_at").defaultNow()}
// );

export const courses_table = pgTable(
  "courses",
  {
    id: serial("id").primaryKey(), // Auto-incrementing primary key
   
    title: text("title").notNull(),
    description: text("description").notNull(),
    price: numeric("price", { precision: 10, scale: 2 }).notNull()
  }
);

export const insertCourseSchema = createInsertSchema(courses_table, {
  title: z.string()
    .min(3, { message: "Title must be at least 3 characters" }),
  description: z.string()
    .min(10, { message: "Description must be at least 10 characters" }),  
  price: z.string().regex(/^\d{1,8}(\.\d{2})?$/, {message: "Price must be at least 0" })
})
export const selectCourseSchema = createSelectSchema(courses_table);

export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type SelectCourse = z.infer<typeof selectCourseSchema>;
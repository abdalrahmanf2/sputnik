import { pgTable,text, serial, numeric, timestamp } from "drizzle-orm/pg-core";

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

export const courses = pgTable(
  "courses",
  {
    id: serial("id").primaryKey(), // Auto-incrementing primary key
   
    title: text("title").notNull(),
    description: text("description"),
    price: numeric("price", { precision: 10, scale: 2 })
  }// Numeric with up to 2 decimal places
);
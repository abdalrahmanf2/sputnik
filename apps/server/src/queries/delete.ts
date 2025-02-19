import { db } from '../db';
import { eq } from 'drizzle-orm';
import { SelectCourse, courses_table } from '../db/schema';

export async function deleteCourseById(id: SelectCourse['id']) {
  const result = await db.delete(courses_table).where(eq(courses_table.id, id)).execute();
  return result.rowCount > 0; 
}

export async function deleteCourseByTitle(title: SelectCourse['title']) {
  const result = await db.delete(courses_table).where(eq(courses_table.title, title)).execute();
  return result.rowCount > 0; 
}
import { db } from '../db';
import { InsertCourse, courses_table } from '../db/schema';

export async function createCourse(data: InsertCourse) {
  return db.insert(courses_table).values(data);
}


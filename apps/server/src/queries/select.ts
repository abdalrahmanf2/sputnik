import { eq } from 'drizzle-orm';
import { db } from '../db';
import { SelectCourse, courses_table } from '../db/schema';


export async function getCourseByID(id: SelectCourse['id']) {
    return db.select().from(courses_table).where(eq(courses_table.id, id));
}

export async function getCourseByTitle(title: SelectCourse['title']) {
    return db.select().from(courses_table).where(eq(courses_table.title, title));

}



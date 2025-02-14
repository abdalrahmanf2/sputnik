CREATE TABLE "courses" (
	"id" serial PRIMARY KEY NOT NULL,
	"course_id" text NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"instructor_id" text NOT NULL,
	"category" text,
	"level" text,
	"price" numeric(10, 2),
	"duration" text,
	"rating" numeric(3, 2),
	"created_at" timestamp DEFAULT now()
);

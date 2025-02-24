import { createFileRoute } from "@tanstack/react-router";
import CoursesSection from "@/components/CoursesSection";
import CoursesHeroSection from "@/components/CoursesHeroSection";

export const Route = createFileRoute("/courses")({
	component: RouteComponent
});

function RouteComponent() {
	return (
		<div>
			<CoursesHeroSection />
			<CoursesSection />
		</div>
	);
}

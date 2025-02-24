import CourseSlider from "./CourseSlider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CoursesSection() {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="w-full">
				<Tabs defaultValue="recent">
					<TabsList className="!flex justify-start bg-transparent border-b-2  rounded-none border-gray-300">
						<TabsTrigger
							className="fonts-poppins text-LightBlue text-lg font-normal rounded-none data-[state=active]:text-DarkBlue data-[state=active]:font-semibold data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-DarkBlue"
							value="recent"
						>
							All Recent
						</TabsTrigger>
						<TabsTrigger
							className="fonts-poppins text-LightBlue text-lg font-normal rounded-none data-[state=active]:text-DarkBlue data-[state=active]:font-semibold data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-DarkBlue"
							value="your courses"
						>
							Your Courses
						</TabsTrigger>
						<TabsTrigger
							className="fonts-poppins text-LightBlue text-lg font-normal rounded-none data-[state=active]:text-DarkBlue data-[state=active]:font-semibold  data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-DarkBlue"
							value="popular"
						>
							Popular
						</TabsTrigger>
					</TabsList>
					<TabsContent value="recent">
						<CourseSlider />
					</TabsContent>
					<TabsContent value="your courses">
						<CourseSlider />
					</TabsContent>
					<TabsContent value="popular">
						<CourseSlider />
					</TabsContent>
				</Tabs>
			</div>
			{/* <CourseSlider /> */}
		</div>
	);
}

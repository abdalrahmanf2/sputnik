import CoursesCard from "./CourseCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function CourseSlider() {
	const items = Array.from({ length: 10 }, (_, i) => ({
		id: i + 1,
		title: `Item ${i + 1}`
	}));

	return (
		<div className="flex flex-col items-center justify-center w-screen">
			<div className="w-full p-4">
				<Carousel className="relative w-full">
					<CarouselContent className="flex w-full">
						{items.map(item => (
							<CarouselItem key={item.id} className="w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 px-2">
								<CoursesCard />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="absolute left-2" />
					<CarouselNext className="absolute right-2" />
				</Carousel>
			</div>
		</div>
	);
}

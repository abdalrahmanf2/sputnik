import { Link } from "@tanstack/react-router";
import { ChevronsRight } from "lucide-react";
import HeroOne from "@/assets/HeroOne.png";
import HeroTwo from "@/assets/HeroTwo.png";
import HeroThree from "@/assets/HeroThree.png";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import MaxWidthWrapper from "./max-width-wrapper";
const Hero = () => {
	return (
		<>
			<MaxWidthWrapper className="flex py-20 items-center">
				<div className="space-y-8 px-36">
					<div className="space-y-2">
						<h2 className="font-bold text-5xl">
							Learn, Explore, and <br></br>
							Launch to the stars!
						</h2>
						<p className="leading-relaxed">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae esse accusamus rerum dolore ratione
							consequuntur autem aut magnam blanditiis quidem? Incidunt, dolore libero. Debitis vitae harum libero
							voluptatum omnis aspernatur. Ipsa delectus aut molestias porro explicabo consectetur. Laborum quos placeat
							et eius saepe cum reprehenderit veritatis expedita quisquam possimus facere, ex deleniti, magnam,
							repudiandae laudantium cupiditate consectetur est nam quibusdam? Corrupti error.
						</p>
					</div>

					<Link
						to="/"
						className={cn(
							buttonVariants({ size: "lg" }),
							"py-8 bg-gradient-to-r from-[#FFB800] to-[#FF6E00] text-white "
						)}
					>
						<span className="text-2xl">Start Courses</span>
						<ChevronsRight className="size-64" />
					</Link>
				</div>

				<div className="flex items-center mr-10 ">
					<div className="relative">
						<img src={HeroOne} className="w-[30rem] max-w-none"></img>
						<img src={HeroTwo} className="absolute w-[25rem] bottom-2 left-5"></img>
						<img src={HeroThree} className="absolute bottom-[-37px] left-[-58px]"></img>
					</div>
				</div>
			</MaxWidthWrapper>
			<div className="w-full relative left-1/2 -translate-x-1/2">
				<svg className="object-fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#0F2245"
						fill-opacity="1"
						d="M0,64L26.7,80C53.3,96,107,128,160,133.3C213.3,139,267,117,320,106.7C373.3,96,427,96,480,122.7C533.3,149,587,203,640,218.7C693.3,235,747,213,800,176C853.3,139,907,85,960,53.3C1013.3,21,1067,11,1120,42.7C1173.3,75,1227,149,1280,176C1333.3,203,1387,181,1413,170.7L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
					></path>
				</svg>
			</div>
		</>
	);
};

export default Hero;

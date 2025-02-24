import { Link } from "@tanstack/react-router";
import { ChevronsRight } from "lucide-react";
import HeroOne from "@/assets/HeroOne.png";
import HeroTwo from "@/assets/HeroTwo.png";
import HeroThree from "@/assets/HeroThree.png";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import HeroSVG from "@/assets/HeroSVG.svg";
const Hero = () => {
	return (
		<div
			className="flex py-20 items-center relative z-[2]"
			style={{
				WebkitMaskImage: `url(${HeroSVG})`,
				maskImage: `url(${HeroSVG})`,
				maskSize: "cover",
				maskRepeat: "no-repeat"
			}}
		>
			<div className="flex flex-col gap-y-4 px-36 items-start ">
				<h2 className="font-bold text-5xl">
					Learn, Explore, and <br></br>
					Launch to the stars!
				</h2>
				<p className="leading-relaxed">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae esse accusamus rerum dolore ratione consequuntur
					autem aut magnam blanditiis quidem? Incidunt, dolore libero. Debitis vitae harum libero voluptatum omnis
					aspernatur. Ipsa delectus aut molestias porro explicabo consectetur. Laborum quos placeat et eius saepe cum
					reprehenderit veritatis expedita quisquam possimus facere, ex deleniti, magnam, repudiandae laudantium
					cupiditate consectetur est nam quibusdam? Corrupti error.
				</p>
				<Link
					to="/"
					className={cn(
						buttonVariants({ variant: "destructive", size: "lg" }),
						"text-2xl bg-gradient-to-r from-[#FFB800] to-[#FF6E00] py-8 rounded-md text-white mt-4"
					)}
				>
					{"Start Courses"}
					<ChevronsRight />
				</Link>
			</div>
			<div className="flex items-center mr-10 ">
				<div className="relative">
					<img src={HeroOne} className="w-[30rem] max-w-none"></img>
					<img src={HeroTwo} className="absolute w-[25rem] bottom-2 left-5"></img>
					<img src={HeroThree} className="absolute bottom-[-37px] left-[-58px]"></img>
				</div>
			</div>
			<svg className="absolute z-[-1]" viewBox="0 0 1280 898" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M-13 12.0001C-13 -22.2416 14.7583 -50 49 -50H1263C1297.24 -50 1325 -22.2417 1325 12V740.866C1325 787.243 1275.95 817.202 1234.69 796.024L1183.39 769.692C1159.9 757.638 1131.36 761.775 1112.27 780.003L1023 865.208C1003.11 884.195 973.091 887.812 949.26 874.092L693.235 726.697C674.634 715.989 651.818 715.662 632.919 725.834L326.857 890.552C303.115 903.33 273.837 899.299 254.431 880.58L174.447 803.429C156.505 786.123 129.943 781.245 107.023 791.048L73.381 805.437C32.4743 822.932 -13 792.923 -13 748.432V12.0001Z"
					fill="#D9D9D9"
				/>
			</svg>
		</div>
	);
};

export default Hero;

import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import { createFileRoute } from "@tanstack/react-router";
import Check from "@/assets/Check.png";
import Stars from "@/assets/Stars.png";
import BodyOne from "@/assets/BodyOne.png";
import BodyTwo from "@/assets/BodyTwo.png";
import ChatIcon from "@/assets/ChatIcon.png";
export const Route = createFileRoute("/")({
	component: Index
});
import "@/index.css";
function Index() {
	return (
		<div>
			<NavBar />
			<Hero />

			<div className="bg-slate-800 pt-[50vh] pb-[30vh] italic-edge relative">
				<div className="flex items-center justify-between">
					<div className="flex items-center justify-center gap-x-4 w-3/5">
						<div className="rounded-t-full rounded-b-full h-[55vh] w-36 overflow-hidden brightness-50">
							<img src={BodyTwo} className="h-full object-cover" />
						</div>
						<div className="rounded-t-full rounded-b-full h-[85vh] w-72 overflow-hidden bg-blue-300 flex items-center">
							<img src={BodyOne} />
						</div>
						<div className="rounded-t-full rounded-b-full h-[55vh] w-36 overflow-hidden brightness-50">
							<img src={BodyTwo} className="h-full object-cover" />
						</div>
					</div>
					<div className="flex flex-col gap-y-4 w-2/5">
						<div className="flex items-center gap-4">
							<h3 className="text-white text-3xl font-medium">About Us</h3>
							<img src={Stars}></img>
						</div>
						<p className="w-3/4 text-white">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. In incidunt voluptatum dolores reprehenderit
							quibusdam, autem blanditiis possimus veritatis impedit beatae.
						</p>
						<h3 className="text-white text-4xl font-bold">Why do you choose sputnik?</h3>
						<div className="grid grid-cols-2 grid-rows-6 gap-y-4 grid-flow-col">
							<div className="flex gap-4 items-center">
								<img src={Check} className="h-6 w-6" /> <p className="text-white">Instructors Expert</p>
							</div>
							<div className="flex gap-4 items-center">
								<img src={Check} className="h-6 w-6" /> <p className="text-white">Flexible Learning</p>
							</div>
							<div className="flex gap-4 items-center">
								<img src={Check} className="h-6 w-6" /> <p className="text-white">Video recordes</p>
							</div>
							<div className="flex gap-4 items-center">
								<img src={Check} className="h-6 w-6" /> <p className="text-white">Instructors Expert</p>
							</div>
							<div className="flex gap-4 items-center">
								<img src={Check} className="h-6 w-6" /> <p className="text-white">Flexible Learning</p>
							</div>
							<div className="flex gap-4 items-center">
								<img src={Check} className="h-6 w-6" /> <p className="text-white">Video recordes</p>
							</div>
							<div className="flex gap-4 items-center">
								<img src={Check} className="h-6 w-6" /> <p className="text-white">Flexible Learning</p>
							</div>
							<div className="flex gap-4 items-center">
								<img src={Check} className="h-6 w-6" /> <p className="text-white">Video recordes</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col mt-5 items-center gap-y-5">
					<div className="flex justify-center items-end gap-x-3">
						<h2 className="text-5xl font-bold text-white">What our students say</h2>
						<img src={ChatIcon} className="h-25 w-20"></img>
					</div>
					<div className="w-4/5 bg-[#8692A4] rounded-xl relative flex justify-between items-center px-6 py-16">
						<div className="flex flex-col gap-2 items-start ps-[5%] ">
							<div className="flex items-center gap-4">
								<div className="rounded-full overflow-hidden flex justify-center items-center h-12 w-12 bg-slate-500 relative">
									<img src={BodyOne} className="h-full absolute bottom-0"></img>
								</div>
								<div className="flex flex-col">
									<h3 className="text-white text-lg ">John Doe</h3>
									<p className="text-xs">UI/UX Designer</p>
								</div>
							</div>
							<p className="text-white text-sm w-4/5">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, optio.
							</p>
						</div>
						<div className="flex flex-col gap-2 items-start ps-[5%]">
							<div className="flex items-center gap-4">
								<div className="rounded-full overflow-hidden flex justify-center items-center h-12 w-12 bg-slate-500 relative">
									<img src={BodyOne} className="h-full absolute bottom-0"></img>
								</div>
								<div className="flex flex-col">
									<h3 className="text-white text-lg ">John Doe</h3>
									<p className="text-xs">UI/UX Designer</p>
								</div>
							</div>
							<p className="text-white text-sm w-4/5">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, optio.
							</p>
						</div>
						<div className="flex flex-col gap-2 items-start ps-[5%]">
							<div className="flex items-center gap-4">
								<div className="rounded-full overflow-hidden flex justify-center items-center h-12 w-12 bg-slate-500 relative">
									<img src={BodyOne} className="h-full absolute bottom-0"></img>
								</div>
								<div className="flex flex-col">
									<h3 className="text-white text-lg ">John Doe</h3>
									<p className="text-xs">UI/UX Designer</p>
								</div>
							</div>
							<p className="text-white text-sm w-4/5">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, optio.
							</p>
						</div>
						<svg
							className="absolute top-[100%] left-14"
							width="65"
							height="84"
							viewBox="0 0 65 84"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M0 0H65L0 84V0Z" fill="#8692A4" />
						</svg>
					</div>
				</div>
			</div>
			<div className="h-[100vh] bg-red-500"></div>
		</div>
	);
}

import bookimg from "../assets/images/book courses page.png";
export default function CoursesHeroSection() {
	return (
		<div className="flex m-14">
			<div className="font-poppins text-DarkBlue">
				<h2 className=" font-semibold leading-9 text-xl">
					Courses to get you started <img className="w-8 inline-block" src={bookimg} alt=""></img>
				</h2>
				<p className="text-base leading-7">Explore courses from experienced, real-world experts.</p>
				<p> Most popular New Trending.</p>
			</div>
		</div>
	);
}

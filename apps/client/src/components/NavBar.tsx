import SputnikLogo from "@/assets/SputnikLogo.png";
import Direction from "@/assets/Direction.png";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import path from "path";
import useMobile from "./../../hooks/useMobile";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
const NAV_LINKS = [
	{ title: "Home", path: "/" },
	{ title: "Courses", path: "/courses" },
	{ title: "Games", path: "/games" },
	{ title: "Events", path: "/events" },
	{ title: "Cart", path: "/cart" }
];
const NavBar = () => {
	const { pathname } = useLocation();
	const isMobile = useMobile();
	console.log(pathname);
	return (
		<div className="flex justify-between items-center px-5 h-[10vh] sticky z-[10]">
			<img src={SputnikLogo} className="h-28"></img>
			{!isMobile ? (
				<>
					<nav className="">
						<ul className="flex shrink">
							{NAV_LINKS.map((link) => (
								<li key={link.path}>
									<Link
										to={link.path}
										className={cn(
											buttonVariants({ variant: "ghost", size: "lg" }),
											pathname === link.path ? "text-slate-900" : "text-slate-600"
										)}
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<div className="flex gap-x-3">
						<Link to="/" className={buttonVariants({ variant: "outline" })}>
							Log In
						</Link>
						<Link to="/" className={buttonVariants()}>
							Sign up
						</Link>
					</div>{" "}
				</>
			) : (
				<Sheet>
					<SheetTrigger>
						<img src={Direction} className="h-10"></img>
					</SheetTrigger>
					<SheetContent>
						<SheetHeader className="mb-3">
							<SheetTitle>Sputnik</SheetTitle>
						</SheetHeader>
						<ul className="flex flex-col gap-y-3">
							{NAV_LINKS.map((link) => (
								<li key={link.path} className="flex justify-center">
									<Link
										to={link.path}
										className={cn(
											buttonVariants({ variant: "ghost", size: "lg" }),
											pathname === link.path ? "text-slate-900 px-36" : "text-slate-600 px-36"
										)}
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</SheetContent>
				</Sheet>
			)}
		</div>
	);
};
export default NavBar;

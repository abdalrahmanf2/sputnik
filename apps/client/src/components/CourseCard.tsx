import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StarIcon } from "@heroicons/react/24/solid";

export default function CoursesCard() {
	return (
		<div>
			<Card className="max-w-sm rounded-xl">
				<img
					className="rounded-xl"
					src="https://s3-alpha-sig.figma.com/img/8bf7/e2d8/725396fc45795cb9ad1d145a9a7bf531?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=N6qeGkDTBC-eXHcowiY5BiqV~g~23adJjb7LtO2k4jFmCeW-79wG2nSFF9XNhYsOur0PRaUyXTKxaqzZYmd6frxXBcVVi0siRNHlE1IDFO8g6vf-rspcD0KYVkzb3OhE67gtVTPGk53av1jAxvXv8Edd1O~2tZwcciZ8OFjZliRtbPINoPPJ0qWpwxJSWfRT9MbtpBguhfqCLFQPEKjAOEEV8w5QCBvUZdTIduhB416wOl6tGNLfC0oTAqjIOe37s6mvMFb1J4uOIXtfM1hDap8wH8mPW7J8XFcy--mwjkAlLe09k0gpm1wbzPS3EAWAjlzwlo3pVlRw64MvKgJ~Sg__"
					alt="Random Image"
				/>
				<CardHeader>
					<CardTitle className="font-poppins font-normal text-xl tracking-wide">Lorem Ipsum</CardTitle>
				</CardHeader>
				<CardContent className="flex">
					<div>
						<CardDescription>Neque porro quisquam Neque porro quisquamNeque porro quisquam</CardDescription>
						<div className="my-2 flex items-start text-ReviewGrey justify-start space-x-1">
							<StarIcon className="w-4 h-4 inline-block text-yellow-400" />
							<p className="text-sm font-jua">4.5</p>
							<p className="text-sm font-jua">(100+)</p>
						</div>
					</div>
					<div className="flex flex-col  justify-center items-center space-y-2">
						<p className="font-jua font-medium">13$</p>
						<Button className="py-2 px-4 font-poppins text-LightBlue bg-white border border-LightBlue rounded-2xl">
							View
						</Button>
					</div>
				</CardContent>
				<CardFooter className="justify-center">
					<Button className="bg-DarkBlue rounded-2xl">Enroll</Button>
				</CardFooter>
			</Card>
		</div>
	);
}

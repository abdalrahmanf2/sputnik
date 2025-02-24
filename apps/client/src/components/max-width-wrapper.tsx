import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

const MaxWidthWrapper = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
	return <div className={cn("max-w-screen-xl lg:max-w-screen-2xl mx-auto px-4", className)}>{children}</div>;
};

export default MaxWidthWrapper;

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CommonButtonProps {
	text: string;
	buttonClasses?: string;
	textClasses?: string;
}

const CommonButton = ({
	text,
	buttonClasses,
	textClasses,
}: CommonButtonProps) => {
	return (
		<Button
			className={cn(
				"capitalize relative border border-white/10 dark:border-black/10 dark:backdrop-blur-2xl dark:bg-black/5 p-1 h-11",
				buttonClasses
			)}
		>
			<span
				className={cn(
					"flex items-center justify-center relative overflow-hidden bg-gradient w-full h-full px-4 cursor-pointer rounded-md font-semibold text-[.8rem] tracking-wider before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent before:h-full before:w-8 before:absolute before:-left-10 hover:before:left-full before:transition-all before:duration-1000 dark:text-white before:top-0",
					textClasses
				)}
			>
				{text}
			</span>
		</Button>
	);
};

export default CommonButton;

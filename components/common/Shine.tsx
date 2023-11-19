import { cn } from "@/lib/utils";

const Shine = ({ customClasses }: { customClasses?: string }) => {
	return (
		<div
			className={cn(
				"w-full h-full bg-gradient-to-l from-[#725bda] to-transparent absolute -top-20 -right-32 opacity-50 -z[1]",
				customClasses
			)}
		/>
	);
};

// background: radial-gradient(34.98% 34.98% at 50% 50%,#725bda 0,rgba(6,19,45,0) 100%);
//     content: "";
//     height: 2000px;
//     left: -60%;
//     opacity: .5;
//     position: absolute;
//     top: -70%;
//     width: 2000px;
//     z-index: -1;

export default Shine;

"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

import ToggleTheme from "@/components/ToggleTheme";
import CommonButton from "@/components/common/CommonButton";
import { navLinks } from "@/constants/NavLinks";
import { cn } from "@/lib/utils";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(false);
	const pathname = usePathname();

	return (
		<div className="fixed w-full py-2 backdrop-blur-xl z-[100]">
			<div className="flex items-center justify-between container px-5 md:px-10 mx-auto">
				<div>
					<Link href="/">NFT MarketPlace</Link>
				</div>
				<div className="relative">
					<ul
						className={cn(
							showNavbar ? "w-80 h-96" : "w-0 h-0",
							"flex md:items-center gap-4 right-0 top-0 overflow-hidden md:overflow-visible xl:gap-8 md:relative absolute md:right-0 md:top-0 rounded-bl-full md:w-auto md:h-auto backdrop-blur-xl bg-purple dark:bg-white md:bg-transparent dark:md:bg-transparent md:rounded-none md:backdrop-blur-none dark:md:backdrop-blur-none flex-col md:flex-row z-[100] transition-all duration-500 py-16 md:py-0"
						)}
					>
						{navLinks.map((link) => (
							<li key={link.link} className="text-end nav-links mx-7 md:mx-0">
								<Link
									href={link.link}
									className={cn(
										pathname === link.link
											? "text-indigo-500 font-semibold before:bg-indigo-500 before:scale-100 hover:before:scale-100 border-indigo-500"
											: "text-white dark:text-black before:scale-0 hover:before:scale-100 before:bg-white dark:before:bg-black",
										"capitalize text-sm md:text-xs md:text-[.8rem] border-b md:border-none w-full md:w-fit pb-[.6rem] md:pb-0 block relative before:absolute before:bottom-0 md:before:-bottom-1 before:rounded-full before:left-1/2 before:-translate-x-1/2 before:w-full before:h-[2px] before:transition-all before:duration-500 whitespace-nowrap"
									)}
								>
									{link.name}
								</Link>
							</li>
						))}
						<IoClose
							onClick={() => setShowNavbar(false)}
							className="text-3xl cursor-pointer md:hidden absolute top-5 left-7"
						/>
					</ul>
				</div>
				<div className="flex items-center gap-2 md:gap-4">
					<FiSearch className="text-xl cursor-pointer" />
					<ToggleTheme />
					<HiOutlineMenuAlt4
						onClick={() => setShowNavbar(true)}
						className="text-xl cursor-pointer md:hidden"
					/>
					<CommonButton text="join now" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;

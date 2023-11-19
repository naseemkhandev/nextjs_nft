"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { EffectCards } from "swiper/modules";
import { SiFitbit } from "react-icons/si";
import { SlPaypal } from "react-icons/sl";
import {
	FaBitcoinSign,
	FaStripe,
	FaViacoin,
	FaAmazonPay,
	FaEthereum,
} from "react-icons/fa6";

import "swiper/css";
import "swiper/css/effect-cards";
import heroData from "@/data/hero/data.json";
import CommonButton from "./common/CommonButton";
import { cn } from "@/lib/utils";
import Shine from "@/components/common/Shine";

interface AvatarProps {
	imgSrc: string;
	name: string;
	username: string;
	customClasses?: string;
}

const Avatar = ({ imgSrc, name, username, customClasses }: AvatarProps) => {
	return (
		<div
			className={cn(
				"rounded-3xl bg-white shadow text-black w-fit flex items-center gap-3 absolute z-[1] py-3 px-6 ",
				customClasses
			)}
		>
			<Image
				src={imgSrc}
				alt="nft"
				width={60}
				height={60}
				className="rounded-full"
			/>
			<div>
				<h3 className="font-semibold text-sm">{name}</h3>
				<span className="text-xs text-zinc-400">{username}</span>
			</div>
		</div>
	);
};

const HeroSection = () => {
	return (
		<div className="relative w-full min-h-screen flex-col lg:flex-row flex items-center justify-between gap-20 lg:gap-40 mt-24 lg:mt-28 xl:mt-20">
			<Shine customClasses="" />

			<div className="relative flex flex-col gap-8 w-full flex-1">
				<h1 className="text-[2.5rem] lg:text-5xl xl:text-6xl leading-snug lg:leading-normal font-bold">
					Collect Next
					<br />
					Generation{" "}
					<span className="text-gradient relative before:absolute before:-bottom-[90%] before:left-1/2 sm:before:-translate-x-[40%] before:-translate-x-1/2 before:bg-[url('/lines.png')] before:bg-cover lg:before:w-60 sm:before:w-48 before:w-40 before:h-full">
						NFTs
					</span>
					<br />
					Today
				</h1>
				<p className="text-sm">
					Cyfonii is the premier marketplace for nifties, which are digital
					items you can truly own for yourself
				</p>
				<CommonButton
					text="get started"
					buttonClasses="h-14 w-fit"
					textClasses="w-48 h-12"
				/>

				<div className="flex flex-col gap-3 mt-5 sm:mt-10 md:mt-16">
					<p className="text-[.65rem] tracking-wider font-semibold">
						We are Monteno NFT
					</p>
					<div className="flex items-center gap-3 md:gap-5 text-zinc-500 text-2xl">
						<span className="text-[.7rem] font-semibold">We accept: </span>
						<SiFitbit className="hover:text-white cursor-pointer" />
						<FaBitcoinSign className="hover:text-white cursor-pointer" />
						<FaStripe className="hover:text-white cursor-pointer" />
						<FaViacoin className="hover:text-white cursor-pointer" />
						<SlPaypal className="hover:text-white cursor-pointer" />
						<FaAmazonPay className="hover:text-white cursor-pointer" />
						<FaEthereum className="hover:text-white cursor-pointer" />
					</div>
				</div>
			</div>

			<Swiper
				effect={"cards"}
				grabCursor={true}
				modules={[EffectCards]}
				className="mySwiper w-full sm:w-[70%] lg:w-[35%] relative"
			>
				{heroData.map((data) => (
					<SwiperSlide key={data.id}>
						<Image
							src={`/hero/${data.imgSrc}`}
							alt="nft"
							width={500}
							height={500}
							className="rounded-[3rem] w-full"
						/>
					</SwiperSlide>
				))}

				<Avatar
					imgSrc="/avatar.png"
					name="Jason Smith"
					username="@jason005"
					customClasses="animate-slide-up bottom-10 -left-5 md:-left-20 md:pr-12"
				/>
				<Avatar
					imgSrc="/etherium.png"
					name="2.26 ETH"
					username="Current Bid"
					customClasses="animate-slide-left top-10 right-0 pr-8"
				/>
			</Swiper>
		</div>
	);
};

export default HeroSection;

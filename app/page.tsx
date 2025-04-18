import Image from "next/image";
import React from "react";
import { aboutMeData } from "./data/data";

const AboutMePage = () => {
	return (
		<main className='flex flex-col items-center sm:mb-32 mb-16 bg-slate-700'>
			<section className='flex sm:flex-row sm:w-10/12 items-center flex-col w-full bg-slate-500 rounded-3xl'>
				<div className='sm:w-1/3 w-full flex justify-center mt-12'>
					<Image
						priority={false}
						width={640}
						height={960}
						aria-label={"image of me"}
						alt={"me"}
						src={"/images/me.jpeg"}
						className='profileImage shadow-xl'
					/>
				</div>
				<div className='sm:ml-20 sm:mt-0  sm:w-2/3 w-full mt-6 ml-0 p-10'>
					<h2 className='font-serif text-white font-bold text-4xl'> {aboutMeData.title}</h2>
					<p className='text-base text-rose-100'> {aboutMeData.body}</p>
				</div>
			</section>
			<section className='w-full bg-slate-500 rounded-3xl p-10 h-full text-rose-100'>
				<p> {aboutMeData.highlightedBody}</p>
			</section>
			<section className='flex sm:flex-row sm:w-10/12 p-10 items-center w-full flex-col text-rose-100 bg-slate-500 rounded-3xl'>
				<div className='flex flex-col  w-full mb-10 sm:mb-0 sm:w-7/12'>
					<p> {aboutMeData.body2}</p>
				</div>
				<div className='sm:w-5/12 sm:ml-10 w-full ml-0 rounded'>
					<Image
						priority={false}
						width={500}
						height={250}
						aria-label={"image of hyatt"}
						alt={"hyatt"}
						src={"/images/hyatt.png"}
						className='h-250 object-cover w-500 rounded-3xl shadow-xl'
					/>
				</div>
			</section>
		</main>
	);
};

export default AboutMePage;
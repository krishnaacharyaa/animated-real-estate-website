import { PropertyCard } from '@/components/Property-card';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { animate, motion, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import useMeasure from 'react-use-measure';
export function PropertiesList() {
	var images = [
		'https://framerusercontent.com/images/Mf2SbSsE4lrNP12Wus9NuA1xVU.webp?scale-down-to=512',
		'https://framerusercontent.com/images/gZQ1apomkY0bpjjPuzg5BkBzrvw.webp?scale-down-to=512',
		'https://framerusercontent.com/images/Zud5Mr2yDfQ2NTPWvbbQhXk2o.webp?scale-down-to=512',
		'https://framerusercontent.com/images/TJkxr7JUIQ96M8wbkj8nF3rlg.webp?scale-down-to=512',
		'https://framerusercontent.com/images/oShABW70GatY4xZtrOLuGWvEc.webp?scale-down-to=512',
	];

	return (
		<main className="py-4 overflow-hidden flex flex-col gap-2">
			<h2 className="text-3xl mx-auto w-full text-center font-bold text-gray-800 mb-8">
				We Help You find your Dream Property <br></br>At the Best Price
			</h2>
			<div className=" flex flex-col  bg-white  items-center justify-center relative overflow-hidden">
				<InfiniteMovingCards items={images} direction="left" speed="fast" />
			</div>

			<div className=" flex flex-col  bg-white  items-center justify-center relative overflow-hidden">
				<InfiniteMovingCards items={images} direction="right" speed="fast" />
			</div>
		</main>
	);
}

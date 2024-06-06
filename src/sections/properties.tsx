import { PropertyCard } from '@/components/Property-card';
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
	let [ref, { width }] = useMeasure();
	let [refRight, { widthRight }] = useMeasure();
	const xTranslationLeft = useMotionValue(0);
	const xTranslationRight = useMotionValue(0);
	useEffect(() => {
		let controlsLeft;
		let finalPositionLeft = -width / 2 - 8;
		controlsLeft = animate(xTranslationLeft, [0, finalPositionLeft], {
			ease: 'linear',
			duration: '25',
			repeat: Infinity,
			repeatType: 'loop',
			repeatDelay: 0,
		});
		return controlsLeft.stop;
	}, [xTranslationLeft, width]);
	useEffect(() => {
		let controlsLeft;
		let finalPositionLeft = width / 2 - 8;
		controlsLeft = animate(xTranslationRight, [0, finalPositionLeft], {
			ease: 'linear',
			duration: '25',
			repeat: Infinity,
			repeatType: 'loop',
			repeatDelay: 0,
		});
		return controlsLeft.stop;
	}, [xTranslationRight, width]);
	return (
		<main className="py-4 overflow-hidden flex flex-col gap-2">
			<h2 className="text-3xl mx-auto w-full text-center font-bold text-gray-800 mb-8">
				We Help You find your Dream Property <br></br>At the Best Price
			</h2>
			<motion.div
				className=" left-0 flex gap-4 w-max"
				ref={ref}
				style={{ x: xTranslationLeft }}
			>
				{[...images, ...images].map((item, idx) => (
					// <PropertyCard image={item} key={idx} />
					<img src={item} key={idx} className="h-40" />
				))}
			</motion.div>
			<motion.div
				className=" left-0 flex gap-4"
				ref={ref}
				style={{ x: xTranslationRight }}
			>
				{[...images, ...images].map((item, idx) => (
					// <PropertyCard image={item} key={idx} />
					<img src={item} key={idx} className="h-40" />
				))}
			</motion.div>
		</main>
	);
}

// import { PropertyCard } from '@/components/Property-card';
// import { animate, motion, useMotionValue } from 'framer-motion';
// import { useEffect } from 'react';
// import useMeasure from 'react-use-measure';
// export function PropertiesList() {
// 	var images = [
// 		'https://framerusercontent.com/images/Mf2SbSsE4lrNP12Wus9NuA1xVU.webp?scale-down-to=512',
// 		'https://framerusercontent.com/images/gZQ1apomkY0bpjjPuzg5BkBzrvw.webp?scale-down-to=512',
// 		'https://framerusercontent.com/images/Zud5Mr2yDfQ2NTPWvbbQhXk2o.webp?scale-down-to=512',
// 		'https://framerusercontent.com/images/TJkxr7JUIQ96M8wbkj8nF3rlg.webp?scale-down-to=512',
// 		'https://framerusercontent.com/images/oShABW70GatY4xZtrOLuGWvEc.webp?scale-down-to=512',
// 	];
// 	let [refLeft, { widthLeft }] = useMeasure();
// 	let [refRight, { widthRight }] = useMeasure();
// 	const xTranslationLeft = useMotionValue(0);
// 	const xTranslationRight = useMotionValue(0);
// 	useEffect(() => {
// 		let controlsLeft;
// 		let finalPositionLeft = -widthLeft / 2 - 8;
// 		controlsLeft = animate(xTranslationLeft, [0, finalPositionLeft], {
// 			ease: 'linear',
// 			duration: '25',
// 			repeat: Infinity,
// 			repeatType: 'loop',
// 			repeatDelay: 0,
// 		});
// 		return controlsLeft.stop;
// 	}, [xTranslationLeft, widthLeft]);
// 	useEffect(() => {
// 		let controlsRight;
// 		let finalPositionRight = widthRight / 2 - 8;
// 		controlsRight = animate(xTranslationRight, [0, finalPositionRight], {
// 			ease: 'linear',
// 			duration: '25',
// 			repeat: Infinity,
// 			repeatType: 'loop',
// 			repeatDelay: 0,
// 		});
// 		return controlsRight.stop;
// 	}, [xTranslationRight, widthRight]);
// 	return (
// 		<main className="py-4 overflow-hidden">
// 			<h2 className="text-3xl mx-auto w-full text-center font-bold text-gray-800 mb-8">
// 				We Help You find your Dream Property <br></br>At the Best Price
// 			</h2>
// 			<motion.div
// 				className="  flex gap-4"
// 				ref={refLeft}
// 				style={{ x: xTranslationLeft }}
// 			>
// 				{[...images, ...images].map((item, idx) => (
// 					// <PropertyCard image={item} key={idx} />
// 					<img src={item} key={idx} className="h-40" />
// 				))}
// 			</motion.div>
// 			<motion.div
// 				className=" flex gap-4"
// 				ref={refRight}
// 				style={{ x: xTranslationRight }}
// 			>
// 				{[...images, ...images].map((item, idx) => (
// 					// <PropertyCard image={item} key={idx} />
// 					<img src={item} key={idx} className="h-40" />
// 				))}
// 			</motion.div>
// 		</main>
// 	);
// }

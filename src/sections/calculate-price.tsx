import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

import { motion, useAnimation } from 'framer-motion';
export function CaculatePriceSection() {
	const [value, setValue] = useState(50);
	const leftItemVariants = {
		hidden: { opacity: 0, x: -100 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: 'tween',
				duration: 0.5,
			},
		},
	};

	const rightItemVariants = {
		hidden: { opacity: 0, x: 100 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: 'tween',
				duration: 0.5,
			},
		},
	};
	return (
		<div className="flex flex-col md:flex-row mx-4 md:mx-36 gap-8 justify-between">
			<motion.div
				initial="hidden"
				whileInView="visible"
				variants={leftItemVariants}
				className="w-full md:w-3/6 shadow-md p-8"
			>
				<h2 className="text-3xl mx-auto w-full font-semibold text-gray-800 mb-4">
					You could save <br></br>
					<span className="text-primary font-bold">${value * 180}</span>
				</h2>
				<div className="flex justify-between mb-2">
					<div>property selling price: </div>
					<div className="">$80000</div>
				</div>
				<Slider
					onValueChange={setValue}
					defaultValue={[50]}
					max={100}
					step={1}
				/>
				<div className="w-full mt-8">
					<Button className="flex justify-center mx-auto text-white">
						Book a free property valuation
					</Button>
					<div className="underline text-center mt-4">
						Change 1.3% comparison fee
					</div>
				</div>
			</motion.div>
			<motion.div
				initial="hidden"
				whileInView="visible"
				variants={rightItemVariants}
				className="h-80 flex-1 object-cover"
			>
				<img
					className="h-80 w-full object-cover"
					src="https://purplebricks-web.imgix.net/web-images/marketing-global/uk/savings-calculator/saving_calculator_2022.jpg?h=435&auto=format"
					alt=""
				/>
			</motion.div>
		</div>
	);
}

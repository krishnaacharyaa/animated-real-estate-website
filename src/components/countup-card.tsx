import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CountUpCard({ icon: Icon, end, label }) {
	const [count, setCount] = useState(0);
	const controls = useAnimation();

	useEffect(() => {
		controls.start('visible');
	}, [controls]);

	useEffect(() => {
		const duration = 1500; // Duration in milliseconds
		const increment = end / (duration / 10); // Increment amount per interval

		const interval = setInterval(() => {
			setCount(prevCount => {
				const nextCount = prevCount + increment;
				if (nextCount >= end) {
					clearInterval(interval);
					return end;
				}
				return nextCount;
			});
		}, 10);

		return () => clearInterval(interval);
	}, [end]);

	return (
		<motion.div
			className="flex flex-col items-center "
			initial="hidden"
			animate={controls}
		>
			<Icon className="h-10 w-10 mx-auto mb-2 text-primary" />
			<h3 className="text-xl md:text-3xl font-bold text-gray-800">
				{Math.ceil(count).toLocaleString()} +
			</h3>
			<p className="text-gray-600">{label}</p>
		</motion.div>
	);
}

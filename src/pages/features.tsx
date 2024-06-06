// components/WhySellWithTru.js

import { delay, motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

const cardVariants = {
	hidden: { opacity: 0.6, scale: 0.5 },
	animate: (index: number) => ({
		// opacity: 1,
		// scale: 1,
		transition: {
			// type: 'spring',
			// stiffness: 260,
			// damping: 20,
			delay: 0.5 * index,
		},
	}),
};

const FeaturesSection = () => {
	return (
		<section className="container mx-auto px-6 py-16">
			<h2 className="text-3xl mx-auto w-full text-center font-bold text-gray-800 mb-12">
				Why sell your house with Tru?
			</h2>
			<div className="grid grid-cols-3 gap-8">
				<AnimatedCard
					index={1}
					imageSrc="https://purplebricks-web.imgix.net/marketing-global/uk/proposition-tiles/dedicated-local-experts-2021.jpg?w=768&auto=format&q=50&ar=407%3A226&fit=crop&ixlib=react-9.2.0"
					heading="Personalized Service"
					details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum lorem eu neque dictum, et venenatis nibh tempus."
					buttonText="Meet your experts"
				/>
				<AnimatedCard
					index={2}
					imageSrc="https://purplebricks-web.imgix.net/marketing-global/uk/proposition-tiles/fair-fixed-fee-2021.jpg?w=768&auto=format&q=50&ar=407%3A226&fit=crop&ixlib=react-9.2.0"
					heading="Expert Guidance"
					details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum lorem eu neque dictum, et venenatis nibh tempus."
					buttonText="Learn More"
				/>
				<AnimatedCard
					index={3}
					imageSrc="https://purplebricks-web.imgix.net/marketing-global/uk/proposition-tiles/better-selling-experience-640@2x.jpg?w=768&auto=format&q=50&ar=407%3A226&fit=crop&ixlib=react-9.2.0"
					heading="Fast Sales"
					details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum lorem eu neque dictum, et venenatis nibh tempus."
					buttonText="See how we do it"
				/>
			</div>
		</section>
	);
};

const AnimatedCard = ({ index, imageSrc, heading, details, buttonText }) => {
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
	return (
		<motion.div
			ref={ref}
			className="bg-white rounded-lg overflow-hidden shadow-lg"
			style={{
				scale: scaleProgress,
				opacity: opacityProgress,
			}}
			key={index}
			// variants={cardVariants}
			// initial="hidden"
			// whileInView="animate"
			// custom={index}
			viewport={{ once: true }}
		>
			<img src={imageSrc} alt="Card" className="w-full h-60 object-cover" />
			<div className="p-6">
				<h3 className="text-xl font-bold text-gray-800 mb-4">{heading}</h3>
				<p className="text-gray-600 mb-6">{details}</p>
				<div className="border text-center border-slate-700 p-2">
					{buttonText}
				</div>
			</div>
		</motion.div>
	);
};

export default FeaturesSection;

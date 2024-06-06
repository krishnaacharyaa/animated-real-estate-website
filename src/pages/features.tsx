// components/WhySellWithTru.js

import { motion, useScroll } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

const cardVariants = {
	hidden: { opacity: 0.6, scale: 0.5 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			type: 'spring',
			stiffness: 260,
			damping: 20,
		},
	},
};

const FeaturesSection = () => {
	return (
		<section className="container mx-auto px-6 py-16">
			<h2 className="text-3xl mx-auto w-full text-center font-bold text-gray-800 mb-12">
				Why sell your house with Tru?
			</h2>
			<div className="grid grid-cols-3 gap-8">
				<AnimatedCard
					imageSrc="https://purplebricks-web.imgix.net/marketing-global/uk/proposition-tiles/dedicated-local-experts-2021.jpg?w=768&auto=format&q=50&ar=407%3A226&fit=crop&ixlib=react-9.2.0"
					heading="Personalized Service"
					details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum lorem eu neque dictum, et venenatis nibh tempus."
					buttonText="Meet your experts"
				/>
				<AnimatedCard
					imageSrc="https://purplebricks-web.imgix.net/marketing-global/uk/proposition-tiles/fair-fixed-fee-2021.jpg?w=768&auto=format&q=50&ar=407%3A226&fit=crop&ixlib=react-9.2.0"
					heading="Expert Guidance"
					details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum lorem eu neque dictum, et venenatis nibh tempus."
					buttonText="Learn More"
				/>
				<AnimatedCard
					imageSrc="https://purplebricks-web.imgix.net/marketing-global/uk/proposition-tiles/better-selling-experience-640@2x.jpg?w=768&auto=format&q=50&ar=407%3A226&fit=crop&ixlib=react-9.2.0"
					heading="Fast Sales"
					details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum lorem eu neque dictum, et venenatis nibh tempus."
					buttonText="See how we do it"
				/>
			</div>
		</section>
	);
};

const AnimatedCard = ({ imageSrc, heading, details, buttonText }) => {
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	});
	return (
		<motion.div
			className="bg-white rounded-lg overflow-hidden shadow-lg"
			variants={cardVariants}
			initial="hidden"
			whileInView="visible"
			// viewport={{ once: true, amount: 0.2 }}
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

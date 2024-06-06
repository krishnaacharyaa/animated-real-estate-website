// import { motion } from 'framer-motion';

// const testimonials = [
// 	{
// 		name: 'John Doe',
// 		image: 'https://randomuser.me/api/portraits/men/32.jpg',
// 		text: 'Tru made selling my house a breeze! Their expert guidance and personalized service were top-notch.',
// 	},
// 	{
// 		name: 'Jane Smith',
// 		image: 'https://randomuser.me/api/portraits/women/44.jpg',
// 		text: 'I was amazed at how quickly my house sold with Tru. Highly recommended!',
// 	},
// 	{
// 		name: 'Samuel Green',
// 		image: 'https://randomuser.me/api/portraits/men/54.jpg',
// 		text: 'The team at Tru provided excellent service and support throughout the selling process.',
// 	},
// ];

// const testimonialVariants = {
// 	hidden: { opacity: 0, x: -100 },
// 	visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
// };

// const TestimonialsSection = () => {
// 	return (
// 		<section className=" py-4">
// 			<h2 className="text-3xl text-center font-bold text-gray-800 mb-12">
// 				Over <span className="text-primary text-3xl font-black">1000+</span>{' '}
// 				happy <br />
// 				customers
// 			</h2>
// 			<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
// 				{testimonials.map((testimonial, index) => (
// 					<motion.div
// 						key={index}
// 						className="bg-white p-6 rounded-lg drop-shadow-md"
// 						initial={{ opacity: 0, y: 50 }}
// 						whileInView={{ opacity: 1, y: 0 }}
// 						transition={{ duration: 0.5, delay: index * 0.3 }}
// 					>
// 						<div className="flex items-center mb-4">
// 							<img
// 								src={testimonial.image}
// 								alt={testimonial.name}
// 								className="w-12 h-12 rounded-full mr-4"
// 							/>
// 							<h3 className="text-xl font-semibold text-gray-800">
// 								{testimonial.name}
// 							</h3>
// 						</div>
// 						<p className="text-gray-600">{testimonial.text}</p>
// 					</motion.div>
// 				))}
// 			</div>
// 		</section>
// 	);
// };

// export default TestimonialsSection;

import React, { useEffect, useState } from 'react';
import { InfiniteMovingCards } from '@/components/ui/testinomial';

export default function TestimonialSection() {
	return (
		<>
			<h2 className="text-3xl text-center font-bold text-gray-800 mb-4">
				Over <span className="text-primary text-3xl font-black">1000+</span>{' '}
				happy <br />
				customers
			</h2>
			<div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
				<InfiniteMovingCards
					items={testimonials}
					direction="right"
					speed="slow"
				/>
			</div>
		</>
	);
}

const testimonials = [
	{
		name: 'John Doe',
		image: 'https://randomuser.me/api/portraits/men/32.jpg',
		text: 'Tru made selling my house a breeze! Their expert guidance and personalized service were top-notch.',
		type: 'Seller',
	},
	{
		name: 'Jane Smith',
		image: 'https://randomuser.me/api/portraits/women/44.jpg',
		text: 'I was amazed at how quickly my house sold with Tru. Highly recommended!',
		type: 'Buyer',
	},
	{
		name: 'Samuel Green',
		image: 'https://randomuser.me/api/portraits/men/54.jpg',
		text: 'The team at Tru provided excellent service and support throughout the selling process.',
		type: 'Seller',
	},
	{
		name: 'John Doe',
		image: 'https://randomuser.me/api/portraits/men/32.jpg',
		text: 'Tru made selling my house a breeze! Their expert guidance and personalized service were top-notch.',
		type: 'Seller',
	},
	{
		name: 'Jane Smith',
		image: 'https://randomuser.me/api/portraits/women/44.jpg',
		text: 'I was amazed at how quickly my house sold with Tru. Highly recommended!',
		type: 'Buyer',
	},
	{
		name: 'Samuel Green',
		image: 'https://randomuser.me/api/portraits/men/54.jpg',
		text: 'The team at Tru provided excellent service and support throughout the selling process.',
		type: 'Seller',
	},
];

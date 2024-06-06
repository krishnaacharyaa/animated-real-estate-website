import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

const SellHomeSection = () => {
	return (
		<div className=" w-full  py-12 bg-bgColor px-4">
			<h2 className="text-3xl mx-auto w-full text-center font-bold text-gray-800 mb-8">
				Ready to sell your home for free?
			</h2>
			<div className="flex justify-center items-center md:w-1/2 mx-auto">
				<Input
					type="text"
					placeholder="Enter your postcode"
					className="px-4 py-2 w-2/4 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
				/>
				<Button className="ml-4 px-6 py-3  text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
					Get Started
				</Button>
			</div>
		</div>
	);
};

export default SellHomeSection;

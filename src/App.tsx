import './App.css';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
	BuildingIcon,
	ThumbsUpIcon,
	UsersIcon,
	MicroscopeIcon,
} from '@/icons/landing-page-icons';
import './App.css';

// Define animation variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

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

export default function App() {
	return (
		<div className="bg-bgColor">
			<nav className="container mx-auto px-6 py-4 flex justify-between items-center">
				<div className="flex items-center">
					<BuildingIcon className="text-primary h-8 w-8" />
					<span className="ml-3 text-xl font-bold uppercase tracking-widest text-gray-800">
						Tru
					</span>
					<span className="ml-1 text-sm uppercase tracking-widest text-gray-500">
						Real Estate
					</span>
				</div>
				<div className="hidden md:flex space-x-6">
					{['Home', 'Properties', 'About', 'Testimonials'].map(link => (
						<a
							href="#"
							className="text-gray-600 hover:text-gray-800"
							key={link}
						>
							{link}
						</a>
					))}
				</div>
				<Button className="bg-accent hover:bg-accentHover text-white">
					Contact us
				</Button>
			</nav>
			<motion.div
				className="container mx-auto px-6 py-16 flex flex-col lg:flex-row justify-between items-center"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<motion.div className="lg:w-1/2 mr-4" variants={leftItemVariants}>
					<h1 className="text-5xl font-bold text-gray-800 mb-6">
						Explore Some Of The Best Properties In Your Area
					</h1>
					<p className="text-gray-600 mb-6">
						Discover premium residences that best suit your needs and lifestyle,
						from elegance to modern luxury.
					</p>
					<motion.div
						className="flex items-center bg-white shadow-md rounded-lg overflow-hidden"
						variants={leftItemVariants}
					>
						<Input
							placeholder="Search properties in your city"
							className="flex-grow px-4 py-2 "
						/>
						<Button className="bg-primary text-white px-4 py-2">
							<MicroscopeIcon className="h-5 w-5" />
						</Button>
					</motion.div>
					<motion.div
						className="mt-8 grid grid-cols-3 gap-8 text-center"
						variants={leftItemVariants}
					>
						<div>
							<BuildingIcon className="h-10 w-10 mx-auto mb-2 text-primary" />
							<h3 className="text-3xl font-bold text-gray-800">200+</h3>
							<p className="text-gray-600">Apartments</p>
						</div>
						<div>
							<UsersIcon className="h-10 w-10 mx-auto mb-2 text-primary" />
							<h3 className="text-3xl font-bold text-gray-800">10K+</h3>
							<p className="text-gray-600">Customers</p>
						</div>
						<div>
							<ThumbsUpIcon className="h-10 w-10 mx-auto mb-2 text-primary" />
							<h3 className="text-3xl font-bold text-gray-800">100+</h3>
							<p className="text-gray-600">Good reviews</p>
						</div>
					</motion.div>
				</motion.div>
				<motion.div
					className="lg:w-1/2 mt-8 lg:mt-0"
					variants={rightItemVariants}
				>
					<img
						src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="Property"
						className="rounded-lg shadow-lg"
					/>
				</motion.div>
			</motion.div>
		</div>
	);
}

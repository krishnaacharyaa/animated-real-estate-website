import './App.css';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
	BuildingIcon,
	ThumbsUpIcon,
	UsersIcon,
	MicroscopeIcon,
	HamburgerIcon, // Assuming you have a HamburgerIcon component
} from '@/icons/landing-page-icons';
import { useState } from 'react';
import { CountUpCard } from './components/countup-card';
import FeaturesSection from './sections/features';
import SellHomeSection from './sections/sell-home';
import { PropertiesList } from './sections/properties';
import { CaculatePriceSection } from './sections/calculate-price';
import TestimonialSection from './sections/testimonial';
import Footer from './sections/footer';
import { Link, useNavigate } from 'react-router-dom';

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
const links = [
	{ text: 'Buy or Rent', href: '/buy-rent' },
	{ text: 'Sell or List', href: '/sell-list' },
	{ text: 'Home Value', href: '/home-value' },
	{ text: 'Franchise', href: '/franchise' },
];
export default function App() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const navigate = useNavigate();
	return (
		<div className="w-full overflow-x-hidden">
			<div className="bg-bgColor">
				<nav className="container px-6 py-4 flex justify-between items-center">
					<Link to={'/'}>
						<div className="flex items-center cursor-pointer">
							<BuildingIcon className="text-primary h-8 w-8" />
							<span className="ml-3 text-xl font-bold uppercase tracking-widest text-gray-800">
								Tru
							</span>
							<span className="ml-1 text-sm uppercase tracking-widest text-gray-500">
								Real Estate
							</span>
						</div>
					</Link>
					<div className="md:hidden">
						<button onClick={() => setIsNavOpen(!isNavOpen)}>
							<HamburgerIcon className="h-6 w-6 text-gray-800" />
						</button>
					</div>
					<div
						className={`${
							isNavOpen ? 'flex flex-col' : 'hidden'
						} md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none z-10`}
					>
						{links.map(({ text, href }) => (
							<Link
								to={'/listings'}
								className="text-gray-600 hover:text-gray-800 block md:inline-block"
								key={text}
							>
								{text}
							</Link>
						))}
					</div>
					<div className="hidden md:flex gap-2">
						<Button variant="outline">Contact us</Button>
						<Button className="bg-accent hover:bg-accentHover text-white">
							Join
						</Button>
					</div>
				</nav>
				<motion.div
					className="container px-6 py-16 flex flex-col lg:flex-row justify-between items-center"
					initial="hidden"
					animate="visible"
					variants={containerVariants}
				>
					<motion.div className="lg:w-1/2 lg:mr-4" variants={leftItemVariants}>
						<h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 text-center lg:text-left">
							Explore Some Of The Best Properties In Your Area
						</h1>
						<p className="text-gray-600 mb-6 text-center lg:text-left">
							Discover premium residences that best suit your needs and
							lifestyle, from elegance to modern luxury.
						</p>
						<motion.div
							className="flex items-center bg-white shadow-md rounded-lg overflow-hidden"
							variants={leftItemVariants}
						>
							<Input
								placeholder="Search properties in your city"
								className="flex-grow px-4 py-2"
							/>
							<Button className="bg-primary text-white px-4 py-2">
								<MicroscopeIcon className="h-5 w-5" />
							</Button>
						</motion.div>
						<motion.div
							className="mt-8 grid grid-cols-3 gap-2 md:gap-8 text-center"
							variants={leftItemVariants}
						>
							<CountUpCard icon={BuildingIcon} end={1500} label="Apartments" />
							<CountUpCard icon={UsersIcon} end={1000} label="Customers" />
							<CountUpCard
								icon={ThumbsUpIcon}
								end={2500}
								label="Good reviews"
							/>
						</motion.div>
					</motion.div>
					<motion.div
						className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end"
						variants={rightItemVariants}
					>
						<img
							src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt="Property"
							className="rounded-lg shadow-lg max-w-full"
						/>
					</motion.div>
				</motion.div>
			</div>
			<div className="flex mt-6 flex-col gap-6 w-full">
				<CaculatePriceSection />
				<FeaturesSection />
				<SellHomeSection />
				<PropertiesList />
				<TestimonialSection />
				<Footer />
			</div>
		</div>
	);
}

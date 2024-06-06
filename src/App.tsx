import './App.css';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Define animation variants
const containerVariants = {
	hidden: { opacity: 0, x: -100 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			stiffness: 100,
			damping: 10,
			staggerChildren: 0.3,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 100,
			damping: 10,
		},
	},
};

export default function App() {
	return (
		<div className="bg-[#f7f8fa]">
			<nav className="container mx-auto px-6 py-4 flex justify-between items-center">
				<div className="flex items-center">
					<BuildingIcon className="text-[#1e40af] h-8 w-8" />
					<span className="ml-3 text-xl font-bold uppercase tracking-widest text-gray-800">
						Skyline
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
				<Button className="bg-[#f59e0b] hover:bg-[#d97706] text-white">
					Contact us
				</Button>
			</nav>
			<motion.div
				className="container mx-auto px-6 py-16 flex flex-col lg:flex-row justify-between items-center"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<motion.div className="lg:w-1/2" variants={itemVariants}>
					<h1 className="text-5xl font-bold text-gray-800 mb-6">
						Explore Some Of The Best Properties In Your Area
					</h1>
					<p className="text-gray-600 mb-6">
						Discover premium residences that best suit your needs and lifestyle,
						from elegance to modern luxury.
					</p>
					<motion.div
						className="flex items-center bg-white shadow-md rounded-lg overflow-hidden"
						variants={itemVariants}
					>
						<Input
							placeholder="Search properties in your city"
							className="flex-grow px-4 py-2"
						/>
						<Button className="bg-[#1e40af] text-white px-4 py-2">
							<MicroscopeIcon className="h-5 w-5" />
						</Button>
					</motion.div>
					<motion.div
						className="mt-8 grid grid-cols-3 gap-8 text-center"
						variants={itemVariants}
					>
						<div>
							<BuildingIcon className="h-10 w-10 mx-auto mb-2 text-[#1e40af]" />
							<h3 className="text-3xl font-bold text-gray-800">200+</h3>
							<p className="text-gray-600">Apartments</p>
						</div>
						<div>
							<UsersIcon className="h-10 w-10 mx-auto mb-2 text-[#1e40af]" />
							<h3 className="text-3xl font-bold text-gray-800">10K+</h3>
							<p className="text-gray-600">Customers</p>
						</div>
						<div>
							<ThumbsUpIcon className="h-10 w-10 mx-auto mb-2 text-[#1e40af]" />
							<h3 className="text-3xl font-bold text-gray-800">100+</h3>
							<p className="text-gray-600">Good reviews</p>
						</div>
					</motion.div>
				</motion.div>
				<motion.div className="lg:w-1/2 mt-8 lg:mt-0" variants={itemVariants}>
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

function BuildingIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
			<path d="M9 22v-4h6v4" />
			<path d="M8 6h.01" />
			<path d="M16 6h.01" />
			<path d="M12 6h.01" />
			<path d="M12 10h.01" />
			<path d="M12 14h.01" />
			<path d="M16 10h.01" />
			<path d="M16 14h.01" />
			<path d="M8 10h.01" />
			<path d="M8 14h.01" />
		</svg>
	);
}

function MicroscopeIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M6 18h8" />
			<path d="M3 22h18" />
			<path d="M14 22a7 7 0 1 0 0-14h-1" />
			<path d="M9 14h2" />
			<path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
			<path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
		</svg>
	);
}

function ThumbsUpIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M7 10v12" />
			<path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
		</svg>
	);
}

function UsersIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
			<circle cx="9" cy="7" r="4" />
			<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
			<path d="M16 3.13a4 4 0 0 1 0 7.75" />
		</svg>
	);
}

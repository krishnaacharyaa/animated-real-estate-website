import {
	Back,
	Bath,
	Bed,
	BuildingIcon,
	Bus,
	Hotel,
	Income,
	Pet,
	Pin,
	School,
	Utility,
} from '@/icons/landing-page-icons';
import Slider from './components/details-page/slider/Slider';
import Map from './components/list-page/map/Map';
import { Input } from '@/components/ui/input';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import posts from './postsData.json';

const fadeIn = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.3,
		},
	},
};

function SinglePage() {
	const { id } = useParams();
	const post = posts.find(e => e.id.toString() === id);
	const [date, setDate] = useState<Date>();

	return (
		<div className="flex flex-col lg:flex-row h-screen">
			<motion.div
				className="lg:flex-3 "
				initial="hidden"
				animate="visible"
				variants={staggerContainer}
			>
				<div className="p-4 md:p-6 lg:p-10">
					<Link to="/listings">
						<motion.div
							className="underline flex items-center  gap-2 text-primary mb-4"
							variants={fadeIn}
						>
							<Back />
							Go back
						</motion.div>
					</Link>
					<motion.div variants={fadeIn}>
						<Slider images={post.images} />
					</motion.div>
					<motion.div className="mt-8" variants={fadeIn}>
						<div className="flex flex-col lg:flex-row justify-between mb-6">
							<div className="mb-4 lg:mb-0">
								<motion.h1 className="text-2xl font-semibold" variants={fadeIn}>
									{post.title}
								</motion.h1>
								<motion.div
									className="flex items-center text-gray-500 mt-2"
									variants={fadeIn}
								>
									<Pin />
									<span>{post.address}</span>
								</motion.div>
								<motion.div
									className="mt-4 py-2 rounded-md text-lg"
									variants={fadeIn}
								>
									{post.postDetail.desc}
								</motion.div>
								<motion.div
									className="drop-shadow-sm rounded-lg bg-bgColor p-4"
									variants={fadeIn}
								>
									<div className="flex flex-col">
										<div className="mb-2">Available for sale</div>
										<h1 className="text-4xl">$ {post.price}</h1>
										<hr className="mt-2 bg-black" />
										<div>
											Please fill the following form so one of our agents will
											be contacting you as soon as possible
										</div>
										<div className="flex flex-col md:flex-row gap-4 mb-4 mt-4">
											<Input placeholder="Name" />
											<Input placeholder="Email address" />
										</div>
										<div className="flex flex-col md:flex-row gap-4">
											<Input placeholder="Number" />
											<Popover>
												<PopoverTrigger asChild>
													<Button
														variant={'outline'}
														className={cn(
															'w-full md:w-[280px] justify-start text-left font-normal',
															!date && 'text-muted-foreground'
														)}
													>
														<CalendarIcon className="mr-2 h-4 w-4" />
														{date ? (
															format(date, 'PPP')
														) : (
															<span>Pick a date</span>
														)}
													</Button>
												</PopoverTrigger>
												<PopoverContent className="w-auto p-0">
													<Calendar
														mode="single"
														selected={date}
														onSelect={setDate}
														initialFocus
													/>
												</PopoverContent>
											</Popover>
										</div>
									</div>
									<Button className="mt-4 text-white">Request a tour</Button>
								</motion.div>
							</div>
						</div>
					</motion.div>
				</div>
			</motion.div>
			<motion.div
				className="lg:flex-2 bg-gray-50 w-full lg:w-[400px] "
				initial="hidden"
				animate="visible"
				variants={staggerContainer}
			>
				<div className="p-4 md:p-6 lg:p-10">
					<p className="text-xl font-bold mb-4">General</p>
					<motion.div variants={fadeIn} className="space-y-6 mb-6">
						<div className="flex items-center space-x-4">
							<Utility />
							<div>
								<span className="font-semibold">Utilities</span>
								<p className="text-gray-500">{post.postDetail.utilities}</p>
							</div>
						</div>
						<div className="flex items-center space-x-4">
							<Pet />
							<div>
								<span className="font-semibold">Pet Policy</span>
								<p className="text-gray-500">{post.postDetail.pet}</p>
							</div>
						</div>
						<div className="flex items-center space-x-4">
							<Income />
							<div>
								<span className="font-semibold">Income Policy</span>
								<p className="text-gray-500">{post.postDetail.income}</p>
							</div>
						</div>
					</motion.div>
					<p className="text-xl font-bold mb-4">Sizes</p>
					<motion.div
						variants={fadeIn}
						className="flex gap-2 mb-6 justify-between"
					>
						<div className="flex flex-col items-center bg-white p-2 rounded-md shadow">
							<BuildingIcon />
							<span>{post.postDetail.size} sqft</span>
						</div>
						<div className="flex flex-col items-center bg-white p-2 rounded-md shadow">
							<Bath />
							<span>{post.bedroom} beds</span>
						</div>
						<div className="flex flex-col items-center bg-white p-2 rounded-md shadow">
							<Bed />
							<span>{post.bathroom} bathrooms</span>
						</div>
					</motion.div>
					<p className="text-xl font-bold mb-4">Nearby Places</p>
					<motion.div
						variants={fadeIn}
						className="flex flex-col space-y-6 mb-6"
					>
						<div className="flex items-center space-x-4">
							<School />
							<div>
								<div className="font-semibold">School</div>
								<p className="text-gray-500">{post.postDetail.school}m away</p>
							</div>
						</div>
						<div className="flex items-center space-x-4">
							<Bus />
							<div>
								<div className="font-semibold">Bus Stop</div>
								<p className="text-gray-500">{post.postDetail.bus}m away</p>
							</div>
						</div>
						<div className="flex items-center space-x-4">
							<Hotel />
							<div>
								<div className="font-semibold">Restaurant</div>
								<p className="text-gray-500">
									{post.postDetail.restaurant}m away
								</p>
							</div>
						</div>
					</motion.div>
					<p className="text-xl font-bold mb-4">Location</p>
					<motion.div className="w-full h-56 mb-6" variants={fadeIn}>
						<Map items={[post]} />
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}

export default SinglePage;

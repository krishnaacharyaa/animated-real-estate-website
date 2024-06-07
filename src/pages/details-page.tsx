// Remove this import if the styles are fully converted to Tailwind
// import Slider from '../../components/slider/Slider';
// import Map from '../../components/map/Map';
import {
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
function SinglePage() {
	const post = {
		title: 'Luxury Apartment in Historic Building',
		price: '2,750,000.00',
		images: [
			'https://framerusercontent.com/images/IMwFvXYelS9htxWGoaWzgBtH2SU.webp',
			'https://framerusercontent.com/images/nVpXLvCjUikE6dq1mgsikOWnRtQ.webp?scale-down-to=512',
			'https://framerusercontent.com/images/dQGaJxVEUqHYp0sg3vXQz7jgRug.webp?scale-down-to=512',
			'https://framerusercontent.com/images/UZXntS0Ye2wlFo9Rc4yrMjO1I0.webp?scale-down-to=512',
		],
		address: '202 Walnut St',
		city: 'Boston',
		bedroom: 2,
		bathroom: 2,
		latitude: '42.3601',
		longitude: '-71.0589',
		type: 'rent',
		property: 'apartment',
		postDetail: {
			desc: 'Elegant apartment located within a historic building in the heart of Boston. Enjoy modern amenities while embracing the charm of the past.',
			utilities: 'Included',
			pet: 'Allowed with restrictions',
			income: 'Verification required',
			size: 1500,
			school: 8,
			bus: 5,
			restaurant: 15,
		},
	};
	const [date, setDate] = useState<Date>();

	return (
		<div className="flex flex-col justify-between mx-32 lg:flex-row h-screen ">
			<div className="lg:flex-3 h-full overflow-y-scroll lg:overflow-hidden">
				<div className="p-6 lg:p-10">
					<Slider images={post.images} />
					<div className="mt-8">
						<div className="flex flex-col lg:flex-row justify-between mb-6">
							<div className="mb-4 lg:mb-0">
								<h1 className="text-2xl font-semibold">{post.title}</h1>
								<div className="flex items-center text-gray-500 mt-2">
									<Pin />
									<span>{post.address}</span>
								</div>
								<div className="mt-4  py-2  rounded-md text-lg">
									{post.postDetail.desc}
								</div>
								<div className="drop-shadow-sm rounded-lg bg-bgColor p-4">
									<div className="flex flex-col ">
										<div className="mb-2">Available for sale</div>
										<h1 className="text-4xl">$ {post.price}</h1>
										<hr className="mt-2 bg-black"></hr>
										<div>
											Please fill the following form so one of our agents will
											be contacting you as soon as possible
										</div>
										<div className="flex gap-4 mb-4 mt-4">
											<Input placeholder="Name"></Input>
											<Input placeholder="Email address"></Input>
										</div>
										<div className="flex gap-4">
											<Input placeholder="Number" />
											<Popover>
												<PopoverTrigger asChild>
													<Button
														variant={'outline'}
														className={cn(
															'w-[280px] justify-start text-left font-normal',
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
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="lg:flex-2  bg-gray-50 w-[400px] h-full overflow-y-scroll lg:overflow-hidden">
				<div className="p-6 lg:p-10">
					<p className="text-xl font-bold mb-4">General</p>
					<div className="space-y-6 mb-6">
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
					</div>
					<p className="text-xl font-bold mb-4">Sizes</p>
					<div className="flex  gap-2 mb-6 justify-between">
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
					</div>
					<p className="text-xl font-bold mb-4">Nearby Places</p>
					<div className="flex mb-6 justify-between">
						<div className="flex flex-col items-center space-x-4">
							<School />
							<div>
								<div className="font-semibold">School</div>
								<p className="text-gray-500">{post.postDetail.school}m away</p>
							</div>
						</div>
						<div className="flex flex-col items-center space-x-4">
							<Bus />
							<div>
								<div className="font-semibold">Bus Stop</div>
								<p className="text-gray-500">{post.postDetail.bus}m away</p>
							</div>
						</div>
						<div className="flex flex-col items-center space-x-4">
							<Hotel />
							<div>
								<div className="font-semibold">Restaurant</div>
								<p className="text-gray-500">
									{post.postDetail.restaurant}m away
								</p>
							</div>
						</div>
					</div>
					<p className="text-xl font-bold mb-4">Location</p>
					<div className="w-full h-56 mb-6">
						<Map items={[post]} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default SinglePage;

// import './listPage.scss';
// import Filter from '../../components/filter/Filter';
// import Card from '../../components/card/Card';
// import Map from '../../components/map/Map';
import postsData from './postsData.json'; // Assuming you've saved the JSON in a file called posts.json
import { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import Card from './components/list-page/Card';
import { Filter } from './components/list-page/filter-section';
import Map from './components/list-page/map/Map';
import { BuildingIcon, HamburgerIcon } from '@/icons/landing-page-icons';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const containerVariants = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

function ListPage() {
	// Use the imported postsData instead of fetching data
	const data = { postResponse: { data: postsData } };
	const [isNavOpen, setIsNavOpen] = useState(false);
	const links = [
		{ text: 'Buy or Rent', href: '/buy-rent' },
		{ text: 'Sell or List', href: '/sell-list' },
		{ text: 'Home Value', href: '/home-value' },
		{ text: 'Franchise', href: '/franchise' },
	];
	return (
		<div>
			<nav className=" px-32 py-4 flex justify-between items-center">
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
			<div className=" flex flex-col lg:flex-row px-32">
				<div className="flex-1 px-4 ">
					<div className="max-w-screen-lg mx-auto">
						<Filter />
						<Suspense fallback={<p>Loading...</p>}>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
								{data.postResponse.data.map(post => (
									<Card key={post.id} item={post} />
								))}
							</div>
						</Suspense>
					</div>
				</div>
				<div className="w-full lg:w-1/3 h-screen lg:sticky top-0">
					<Suspense fallback={<p>Loading...</p>}>
						<Map items={data.postResponse.data} />
					</Suspense>
				</div>
			</div>
		</div>
	);
}

export default ListPage;

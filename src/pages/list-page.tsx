// import './listPage.scss';
// import Filter from '../../components/filter/Filter';
// import Card from '../../components/card/Card';
// import Map from '../../components/map/Map';
import postsData from './postsData.json'; // Assuming you've saved the JSON in a file called posts.json
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import Card from './components/list-page/Card';
import { Filter } from './components/list-page/filter-section';

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

	return (
		<div className="flex flex-col lg:flex-row">
			<div className="flex-1 p-4">
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
					{/* <Map items={data.postResponse.data} /> */}
				</Suspense>
			</div>
		</div>
	);
}

export default ListPage;

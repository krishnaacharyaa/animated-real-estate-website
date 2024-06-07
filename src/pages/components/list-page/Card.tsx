import { Bath, Bed, Pin } from '@/icons/landing-page-icons';
import { Link } from 'react-router-dom';

export default function Card({ item }) {
	return (
		<Link to={'/details'}>
			<div className="bg-white drop-shadow-md rounded-lg overflow-hidden">
				<img
					src={item.images[0]}
					alt={item.title}
					className="w-full h-48 object-cover"
				/>
				<div className="p-4">
					<h2 className="text-xl font-semibold text-gray-800 mb-2">
						{item.title}
					</h2>
					<p className="text-gray-600 mb-2">
						<div className="inline-block w-4 h-4 mr-2">
							<Pin />
						</div>
						{item.address}, {item.city}
					</p>
					<p className="text-indigo-600 text-lg font-semibold mb-2">
						$ {item.price}
					</p>
					<div className="flex justify-between items-center">
						<div className="flex space-x-4">
							<div className="flex items-center gap-1 text-gray-600">
								{/* <img src="/bed.png" alt="" className="w-5 h-5 mr-1" /> */}
								<Bath />
								{item.bedroom} Beds
							</div>
							<div className="flex items-center gap-1 text-gray-600">
								{/* <img src="/bath.png" alt="" className="w-5 h-5 mr-1" /> */}
								<Bed />
								{item.bathroom} Baths
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

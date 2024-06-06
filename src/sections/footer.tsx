import { Whatsapp, X } from '@/icons/landing-page-icons';
import React from 'react';

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300 ">
			<div className="container mx-auto px-4 py-8 md:py-16 flex flex-wrap justify-between">
				<div className="w-1/2 md:w-auto mb-8 md:mb-0">
					<h3 className="text-lg font-semibold mb-4">SALES & LETTINGS</h3>
					<ul>
						<li>Sell a property</li>
						<li>Buy a property</li>
						<li>Let a property</li>
						<li>Rent a property</li>
						<li>Property search</li>
						<li>Land and New Homes</li>
						<li>Download the app</li>
					</ul>
				</div>
				<div className="w-1/2 md:w-auto mb-8 md:mb-0">
					<h3 className="text-lg font-semibold mb-4">HELP & CONTACT</h3>
					<ul>
						<li>Contact us</li>
						<li>Login</li>
						<li>Terms & conditions</li>
						<li>FAQs</li>
						<li>Privacy</li>
					</ul>
				</div>
				<div className="w-1/2 md:w-auto mb-8 md:mb-0">
					<h3 className="text-lg font-semibold mb-4">USEFUL LINKS</h3>
					<ul>
						<li>Meet our experts</li>
						<li>Blog</li>
						<li>Sitemap</li>
						<li>CMP Certificate</li>
						<li>CMP Member Standards</li>
						<li>Professional Indemnity</li>
					</ul>
				</div>
				{/* Section 4 */}
				<div className="w-1/2 md:w-auto">
					<h3 className="text-lg font-semibold mb-4">FOLLOW US ON</h3>
					<div className="flex space-x-4">
						<Whatsapp />
						<X />
						<Whatsapp />
						<X />
					</div>
					<p className="mt-4">TRUSTED & LOVED</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

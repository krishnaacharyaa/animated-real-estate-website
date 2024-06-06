'use client';

import { Star } from '@/icons/landing-page-icons';
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

export const InfiniteMovingCards = ({
	items,
	direction = 'left',
	speed = 'fast',
	pauseOnHover = true,
	className,
}: {
	items: {
		image: string;
		name: string;
		text: string;
		type: string;
	}[];
	direction?: 'left' | 'right';
	speed?: 'fast' | 'normal' | 'slow';
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach(item => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === 'left') {
				containerRef.current.style.setProperty(
					'--animation-direction',
					'forwards'
				);
			} else {
				containerRef.current.style.setProperty(
					'--animation-direction',
					'reverse'
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === 'fast') {
				containerRef.current.style.setProperty('--animation-duration', '20s');
			} else if (speed === 'normal') {
				containerRef.current.style.setProperty('--animation-duration', '40s');
			} else {
				containerRef.current.style.setProperty('--animation-duration', '80s');
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn('scroller relative z-20  max-w-7xl ', className)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					' flex min-w-full shrink-0 gap-4 w-max flex-nowrap',
					start && 'animate-scroll ',
					pauseOnHover && 'hover:[animation-play-state:paused]'
				)}
			>
				{items.map((item, idx) => (
					<li
						className="w-[350px] max-w-full relative rounded-2xl border flex-shrink-0 border-bgColor px-8 py-6 md:w-[450px]"
						key={item.name}
					>
						<blockquote>
							<div
								aria-hidden="true"
								className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
							></div>
							<div className="flex gap-2 mb-4">
								<Star />
								<Star />
								<Star />
							</div>
							<span className=" relative z-20 text-sm leading-[1.6]  font-normal">
								{item.text}
							</span>
							<div className="flex items-center my-4">
								<img
									src={item.image}
									alt={item.name}
									className="w-12 h-12 rounded-full mr-4"
								/>
								<div>
									<h3 className="text-xl font-medium ">{item.name}</h3>
									<h6>{item.type}</h6>
								</div>
							</div>
						</blockquote>
					</li>
				))}
			</ul>
		</div>
	);
};

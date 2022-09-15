import React, { FC, useState, useEffect, ReactNode } from 'react';
import { Image } from '../types'
import './Hero.scss';

interface HeroProps {
	children?: ReactNode;

	// Hero image
	image?: Image;

	// Text Color
	colorText?: string;

	// Background Color
	colorBg?: string;

	// Display as height of viewport
	isFullHeight?: boolean;
}

const Hero: FC<HeroProps> = ({
	children,
	image,
	colorText,
	colorBg,
	isFullHeight
}) => {
	const [state, setState] = useState({
		height: window.innerHeight
	});

	// Classes for main component
	const compClasses = isFullHeight ? 'vs-hero' : 'vs-hero vs-full-height';

	// Inline styling
	const styleProps = {
		height: (isFullHeight ? state.height : ''),
		color: colorText || '',
		backgroundColor: colorBg || ''
	};

	// Function to update the height
	function updateHeight(): void {
		setState({ ...state, height: window.innerHeight});
	};

	// Hook to call function on resize
	useEffect(() => {
		if(isFullHeight) {
			window.addEventListener('resize', updateHeight);
			return () => window.removeEventListener('resize', updateHeight);
		}
	});

	return (
		<section className={compClasses} style={styleProps}>
			{image && (
				<div className={'vs-hero__background'}>
					<img className='d-block d-sm-none' src={image.src} alt={image.alt} />
					<img className='d-none d-sm-block' src={image.src} alt={image.alt} />
				</div>
			)}

			{/* TextBox */}
			{children}
		</section>
	);
};

export default Hero;

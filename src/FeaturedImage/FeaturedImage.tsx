import React, { FC } from 'react';
import { Image } from '../types'
import './FeaturedImage.scss';

interface FeaturedImageProps {
	// Number of columns to use for desktop and mobile
	columnDesktop: number;
	columnMobile: number;

	image: Image;
	text?: string;
	url?: string;
}

const FeaturedImage: FC<FeaturedImageProps> = ({
	columnDesktop,
	columnMobile,
	image,
	text,
	url
}) => {
	const compClasses =
		'vs-featured-image ' +
		'col-md-' + columnDesktop +
		' col-sm-' + columnMobile +
		' col-xs-' + columnMobile +
		' text-center';

	return (
		<div className={compClasses}>
			<a href={url} target='_blank' rel='noopener noreferrer'>
				<img src={image.src} alt={image.alt} />
				<h5>{text}</h5>
			</a>
		</div>
	);
};

export default FeaturedImage;

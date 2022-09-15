import React, { FC, ReactNode } from 'react';
import classnames from 'classnames';
import { Image } from '../types'
import './FeaturedStory.scss';

interface FeaturedStoryProps {
	children?: ReactNode;

	// FeaturedStory image
	image: Image;

	reverseRows?: boolean;
}

const FeaturedStory: FC<FeaturedStoryProps> = ({
	children,
	image,
	reverseRows = false,
}) => {
	const rowClasses = classnames('row', {
		'flex-row-reverse': reverseRows
	});

	return (
		<section className={'vs-featured-story'}>
			<div className={'container'}>
				<div className={rowClasses}>
					<div className={'vs-featured-story__portrait col-md-6 col-sm-12'}>
						<div className={'vs-featured-story__portrait__bg'}></div>
						<img className={'vs-featured-story__portrait__img'} src={image.src} alt={image.alt} />
					</div>
					<div className={'col-md-6 col-sm-12'}>
						{children}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedStory;

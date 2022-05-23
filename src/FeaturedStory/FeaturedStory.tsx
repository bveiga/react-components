import React, { FC } from 'react';
import classnames from 'classnames';

import { Image } from '../../common/types'

interface FeaturedStoryProps {
	// FeaturedStory image
	image: Image;

	// Background Color
	colorBg?: string;

	reverseRows?: boolean;
}

const FeaturedStory: FC<FeaturedStoryProps> = ({
	image,
	colorBg,
	reverseRows = false,
	children
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

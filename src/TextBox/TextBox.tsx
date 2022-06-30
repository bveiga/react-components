import React, { FC } from 'react';
import classnames from 'classnames';

interface TextBoxProps {
	// Width of element in number of colums (1-12)
	sizeDesktop?: number;
	sizeMobile?: number;

	// Vertical position (top, center, bottom)
	posVertical?: string;

	// Horizontal position (left, center, right)
	posHorizontal?: string;

	// Is this going over a image?
	overlayImage?: boolean;
}

const TextBox: FC<TextBoxProps> = ({
	sizeDesktop = 12,
	sizeMobile = 12,
	posVertical,
	posHorizontal,
	overlayImage = false,
	children
}) => {
	// Classes for textbox positioning
	const textBoxOuterClasses = classnames('container card-body d-md-block h-100 ', {
		'card-img-overlay': overlayImage
	});

	// Classes for textbox positioning
	const textBoxInnerClasses = classnames('d-flex flex-row h-100', {
		'justify-content-start': posHorizontal === 'left',
		'justify-content-center': posHorizontal === 'center',
		'justify-content-end': posHorizontal === 'right',
		'align-items-start': posVertical === 'top',
		'align-items-center': posVertical === 'center',
		'align-items-end': posVertical === 'bottom'
	});

	const columnClasses = classnames(
		'col-md-' + sizeDesktop,
		'col-sm-' + sizeMobile
	);

	return (
		<div className={textBoxOuterClasses}>
			<div className={textBoxInnerClasses}>
				<div className={columnClasses}>
					{children}
				</div>
			</div>
		</div>
	);
};

export default TextBox;

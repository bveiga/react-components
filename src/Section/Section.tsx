import React, { FC } from 'react';

export enum SectionVariant {
	Primary = 'primary',
	Secondary = 'secondary',
	Default = 'default'
}

interface SectionProps {
	noColumns?: boolean;
	title?: string;

	// Color scheme
	variant?: SectionVariant;
}

const Section: FC<SectionProps> = ({
	children,
	noColumns,
	title,
	variant = SectionVariant.Default
}) => {
	const innerComponent = noColumns ?
		children
	:
		<div className='col-md-12'>
			{children}
		</div>
	;

	const compClasses = 'vs-section vs-section--' + variant;

	return (
		<section className={compClasses}>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<h2>{title}</h2>
					</div>
					{innerComponent}
				</div>
			</div>
		</section>
	);
};

export default Section;

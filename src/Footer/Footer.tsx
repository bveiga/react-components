import React, { FC } from 'react';

interface FooterProps {
	// Copyright text
	copyrightInfo: string;
}

const Footer: FC<FooterProps> = ({ copyrightInfo }) => {
	return (
		<footer className='vs-footer'>
			<div className='container'>
				<div className='row'>
					<div className='column col-md-12'>
						{copyrightInfo}
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

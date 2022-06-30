import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { LinkElement } from '../types'
import './ButtonLink.scss'

export enum ButtonVariant {
	Primary = 'primary',
	Secondary = 'secondary',
	Tertiary = 'tertiary',
	Text = 'text'
}

interface ButtonLinkProps {
	link: LinkElement;
	variant?: ButtonVariant;
}

const ButtonLink: FC<ButtonLinkProps> = ({ link, variant = ButtonVariant.Primary }) => {
	const compClasses = 'vs-btn vs-btn--' + variant + ' btn px-4 py-2';

	return (
		<Link to={link.url} className={compClasses}>
			{link.text}
		</Link>
	);
}

export default ButtonLink;

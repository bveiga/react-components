import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LinkElement } from '../types'
import './Header.scss';

interface HeaderProps {
	brandName: string;
	logo?: string;

	// Navigation properties
	navList?: LinkElement[];
	activeIndex?: number;

	// Styling
	isLight?: Boolean;
}

const Header: FC<HeaderProps> = ({
	brandName,
	logo,
	navList,
	activeIndex,
	isLight = true
}) => {
	let navClasses = 'collapse navbar-collapse';
	const [state, setState] = useState({
		navToggled: false
	});

	let navbarShade: string = isLight ? 'light' : 'dark';

	return (
		// TODO: add back the 'fixed-top' class
		<header className="vs-header">
			<nav className={'navbar navbar-expand-sm navbar-'+navbarShade}>
				<div className='container'>
					{/* Logo/Brand */}
					<a className='vs-brand navbar-brand' href='/'>
						{logo && <img src={logo} className='vs-brand__logo' alt='logo' />}
						<span className={logo ? 'vs-brand__name sr-only' : 'vs-brand__name'}>{brandName}</span>
					</a>

					{/* Mobile Toggle */}
					<button
						className='navbar-toggler'
						data-toggle='collapse'
						data-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
						onClick={() => setState({ ...state, navToggled: !state.navToggled })}>
						<span className='navbar-toggler-icon'></span>
					</button>

					{/* Navigation */}
					{navList && (
						<div className={state.navToggled ? navClasses + ' show' : navClasses} id='navbarNav'>
							<ul className='navbar-nav ml-auto'>
								{navList.map((link, index) => renderNavigation(link, index, activeIndex))}
							</ul>
						</div>
					)}
				</div>
			</nav>
		</header>
	);
}

const renderNavigation = function(link: LinkElement, index: number, activeIndex?: number): JSX.Element {
	const compClasses = (index === activeIndex) ? 'nav-item active' : 'nav-item';
	return (
		<li className={compClasses} key={index}>
			<NavLink to={link.url} className='nav-link' activeClassName="active">
				{link.text}
			</NavLink>
		</li>
	);
}

export default Header;

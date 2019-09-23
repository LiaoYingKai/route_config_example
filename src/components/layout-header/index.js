import React from 'react';
import { NavLink, } from 'react-router-dom';
import './style.scss';

function LayoutHeader() {
	return (
		<div className="header">
			<ul>
				<li>
					<NavLink exact to="/" activeClassName="activeLink">Home</NavLink>
				</li>
				<li>
					<NavLink exact to="/About" activeClassName="activeLink">About</NavLink>
				</li>
				<li>
					<NavLink exact to="/Contact" activeClassName="activeLink">Contact</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default LayoutHeader;

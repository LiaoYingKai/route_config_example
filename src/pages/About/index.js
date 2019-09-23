import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { RenderRoute } from '../../route/renderRoute';
import { NavLink } from 'react-router-dom';

import './style.scss';

const propTypes = { 
	routes: PropTypes.array,
};

class About extends Component {
	render() {
		const { routes } =this.props;

		return (
			<div className="about">
				<ul>
					<li >
						<NavLink to='/about/me'>me</NavLink>
					</li>
					<li >
						<NavLink to='/about/he'>he</NavLink>
					</li>
				</ul>
				{RenderRoute(routes)}
			</div>
		);
	}
}

About.propTypes = propTypes;

export default About;

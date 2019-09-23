import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { RenderRoute } from '../../layout/route/routeRender';
import { NavLink } from 'react-router-dom';

import './style.scss';

const propTypes = { 
	todos: PropTypes.array,
	routes: PropTypes.array,
};
const defaultProps = {
	todos: [],
};

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
		};
		this._handleChangeValue = this._handleChangeValue.bind(this);
	}

	_handleChangeValue(event) {
		this.setState({
			inputValue: event.target.value
		});
	}
	render() {
		const { inputValue } = this.state;
		const { _handleChangeValue } = this;
		const { todos, routes } =this.props;

		return (
			<div className="about">
				<div >
					TODO：
					<input onChange={ (event) => { _handleChangeValue(event); }} value={inputValue}></input>
					<ul>
						
						{
							routes.map((route,index) => (
								<li key={index}>
									<NavLink to={route.path}>{route.name}</NavLink>
								</li>
							))
						}
					</ul>
					{RenderRoute(routes)}
				</div>
				<ul>
					{
						todos.map((item, index) => (
							<li key={`${item}__${index}`}>
								{item}
							</li>
						))
					}
				</ul>
			</div>
		);
	}
}

About.propTypes = propTypes;
About.defaultProps = defaultProps;
export default About;

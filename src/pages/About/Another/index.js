import React, { Component, } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	match: PropTypes.object
};

function Another({ match }) {
	return (
		<div>
			About {match.params.another}
		</div>
	);
}

Another.propTypes = propTypes;

export default Another;
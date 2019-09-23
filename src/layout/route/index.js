import React from 'react';
import { Switch } from 'react-router-dom';
import { routeConfig } from './config';
import { RouteWithSubRoutes, RenderRoute } from './routeRender';

function RouteLayout() {
	return (
		<React.Fragment>
			{RenderRoute(routeConfig)}
		</React.Fragment>
	);
}


export default RouteLayout;
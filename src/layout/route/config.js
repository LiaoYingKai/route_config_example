import loadComponent from '../lib/loadable';

const Home = loadComponent({ loader: () => import('../../pages/Home') });
const About = loadComponent({ loader: () => import('../../pages/About') });
const Contact = loadComponent({ loader: () => import('../../pages/Contact') });
const Me =  loadComponent({ loader: () => import('../../pages/About/Me') });
const Another =  loadComponent({ loader: () => import('../../pages/About/Another') });

export const routeConfig = [
	{
		path: '/',
		component: Home,
		name: 'Home',
		exact: true,
	},
	{
		path: '/about',
		component: About,
		name: 'About',	
		routes: [
			{
				path: '/about/me',
				component: Me,
				exact: true,
				name: 'Me'
			},
			{
				path: '/about/:another',
				params: {
					another: 'another',
				},
				component: Another,
				name: 'Another'
			}
		]
	},
	{
		path: '/Contact',
		component: Contact,
		exact: true,
		name: 'Contact'
	},
];
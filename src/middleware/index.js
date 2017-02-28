import { Router } from 'express'

import { dev, dependencies } from '../../package.json';

export default ({ config, db }) => {
	let routes = Router();

	// add middleware here
	routes.get('/', function (req, res) {
		res.json({ dependencies });
	});

	return routes;
}

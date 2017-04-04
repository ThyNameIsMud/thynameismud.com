'use strict';

const path = require('path');
const CONF = require(path.resolve('config.json'));

module.exports = {
	method: 'GET',
	path  : '/static/{param*}',
	config: {
		handler: (req, reply) => {
			reply.file(path.resolve(CONF.path.static, req.params.param));
		}
	}
};

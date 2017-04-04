'use strict';

const path = require('path');
const CONF = require(path.resolve('config.json'));

module.exports = {
	method: 'GET',
	path: '/compiled/{param*}',
	config: {
		handler: (request, reply) => {
			reply.file(path.resolve(CONF.path.static, request.params.param));
		}
	}
};

/*jshint node:true */
var 
CONFIG = require(process.env.base_path + 'config')

;

module.exports = {
	method: 'GET',
	path: '/static/{param*}',
	handler: function (request, reply) {
		reply.file(CONFIG.paths.static + request.params.param);
	}
};
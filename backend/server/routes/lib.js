/*jshint node:true */

module.exports = {
	method: 'GET',
	path: '/static/{param*}',
	handler: function (request, reply) {
		reply.file(__dirname + "/../source/" + request.params.param);
	}
};
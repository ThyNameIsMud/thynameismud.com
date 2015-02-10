/*jshint node:true */

module.exports = {
	method: 'GET',
	path: '/compiled/{param*}',
	handler: function (request, reply) {
		reply.file(__dirname + "/../static/" + request.params.param);
	}
};
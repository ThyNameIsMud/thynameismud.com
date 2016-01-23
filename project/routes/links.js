/*jshint node:true */

module.exports = {
	method: 'GET',
	path: '/resume/{param*}',
	handler: function (request, reply) {
		var urgoingto = {
			"gallery": "https://gist.github.com/ThyNameIsMud/f473cd74cf69c4af6fec",
			"videos": "https://gist.github.com/ThyNameIsMud/7e90e0d60df75a91f150",
			"escapistplugs": "https://gist.github.com/ThyNameIsMud/3c3944715279d808f53c",
			"wpsitemap": "https://gist.github.com/ThyNameIsMud/065626a7af04213cfd74",
			"brackets": "https://gist.github.com/ThyNameIsMud/46c63ca3eede91c19f43",
			"wpgaparser": "https://gist.github.com/ThyNameIsMud/5be5ecb54bd8c9c0a880"
		}
		reply.redirect(urgoingto[request.params.param]);
	}
};
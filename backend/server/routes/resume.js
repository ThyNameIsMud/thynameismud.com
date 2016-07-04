module.exports = {
	method: 'GET',
	path: '/resume',
	handler: function (request, reply) {
		/* do things with request; */
		reply.view('resume', {
	        title: 'Resume | ThyNameIsMud.com',
	        page: 'resume'
	    });
	}
};
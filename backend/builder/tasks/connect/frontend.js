/*jshint node:true*/
'use strict';

var 

CONFIG = require(process.env.base_path + 'config'),

// Dependences
gulp = require('gulp-help')(require('gulp')),
pm2 = require('gulp-connect-pm2')

;

module.exports = function (callback) {
	console.info("Connecting Frontend Server");

	gulp.task('connect-frontend', function() {
		pm2.server({
			root: CONFIG.paths.servers + 'frontend-server',
			port: 6669,
			livereload: true
		});
	});
};

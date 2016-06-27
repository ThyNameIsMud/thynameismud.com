/*jshint node:true*/
'use strict';

var 

CONFIG = require(process.env.base_path + 'config'),

// Dependences
gulp = require('gulp-help')(require('gulp'))
;

module.exports = function (callback) {
	console.info("Connecting Frontend Server");

	/*gulp.task('reload-css', function() {
		//gulp.src(CONFIG.paths.static + 'semantic/*.css')
		//.pipe(pm2.reload());
	});

	gulp.task('reload-js', function() {
		//gulp.src(CONFIG.paths.static + 'semantic/*.js')
		//.pipe(pm2.reload());
	});

	gulp.task('watch-output', function() {
		gulp.watch([CONFIG.paths.static + 'semantic/*.css'], ['reload-css']);
		gulp.watch([CONFIG.paths.static + 'semantic/*.js'], ['reload-js']);
	});*/

};

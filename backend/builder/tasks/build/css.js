/*jshint node:true*/

var gulp = require('gulp'),

CONFIG = require(process.env.base_path + 'config'),

//gulp
	flatten        = require('gulp-flatten'),
	plumber        = require('gulp-plumber'),
	print          = require('gulp-print'),
	uglify         = require('gulp-uglify'),
	gulpBowerFiles = require('main-bower-files');

module.exports = function (callback) {

	console.info('Compiling Additional Styles');

	/*var bowerConf = {
				'paths': {
					'bowerDirectory' : CONFIG.paths.libaries,
					'bowerJson' : CONFIG.paths.builder + '/config/bower.json',
					'bowerrc' : CONFIG.paths.builder + '/config/.bowerrc'
				}
			},
		uglifyConf = {
				'preserveComments' : 'license'
			};

	gulp.src(gulpBowerFiles(bowerConf))
		.pipe(plumber())
		.pipe(flatten())
		.pipe(uglify(uglifyConf))
		.pipe(gulp.dest(CONFIG.paths.compile + '/js/libs.js'))
		.on('end', function () {
			callback();
		});*/
};
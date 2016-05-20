/*jshint node:true*/
// compile and make js awesome

var 

CONFIG = require('../../../../config'),
gulp = require('gulp'),

//gulp
	flatten        = require('gulp-flatten'),
	plumber        = require('gulp-plumber'),
	print          = require('gulp-print'),
	uglify         = require('gulp-uglify'),
	bower          = require('gulp-bower'),
	gulpBowerFiles = require('main-bower-files');

module.exports = function (callback) {

	console.info('Compiling Additional Javascripts');

	var bowerFilesConf = {
				'paths': {
					'bowerDirectory' : CONFIG.paths.libaries,
					'bowerJson' : CONFIG.paths.builder + '/config/bower.json',
					'bowerrc' : CONFIG.paths.builder + '/config/.bowerrc'
				}
			},
		bowerConf = {
			'directory' : CONFIG.paths.builder + '/config/.bowerrc',
			'cmd' : 'install'
		},
		uglifyConf = {
				'preserveComments' : 'license'
			};

	bower(bowerConf);

	gulp.src(gulpBowerFiles(bowerConf))
		.pipe(plumber())
		.pipe(flatten())
		.pipe(uglify(uglifyConf))
		.pipe(gulp.dest(CONFIG.paths.compile + '/js/libs.js'))
		.on('end', function () {
			callback();
		});
};
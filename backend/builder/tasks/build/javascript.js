/*jshint node:true*/

var 

CONFIG = require(process.env.base_path + 'config'),
gulp = require('gulp'),

//gulp
	flatten        = require('gulp-flatten'),
	plumber        = require('gulp-plumber'),
	print          = require('gulp-print'),
	uglify         = require('gulp-uglify'),
	bower          = require('gulp-bower'),
	bowerFiles = require('main-bower-files');

module.exports = function (callback) {

	console.info('Compiling Additional Javascripts');

	var bowerFilesConf = {
				'paths': {
					'bowerDirectory' : CONFIG.paths.libaries,
					'bowerJson' : CONFIG.paths.builder + 'config/bower.json',
					'bowerrc' : CONFIG.paths.builder + 'config/.bowerrc'
				}
			},
		bowerConf = {
			'cwd' : CONFIG.paths.builder + 'config/',
			'cmd' : 'install'
		},
		uglifyConf = {
				'preserveComments' : 'license'
			};

	bower(bowerConf);

	gulp.src(bowerFiles(bowerFilesConf))
		.pipe(plumber())
		.pipe(flatten())
		.pipe(uglify(uglifyConf))
		.pipe(gulp.dest(CONFIG.paths.static + 'js/libs.js'))
		.on('end', function () {
			callback();
		});
};
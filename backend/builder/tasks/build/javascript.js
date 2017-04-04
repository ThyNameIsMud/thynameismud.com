'use strict';

const path   = require('path');
const CONFIG = require(path.resolve('config.js'));
const gulp   = require('gulp');

//gulp
const flatten    = require('gulp-flatten');
const plumber    = require('gulp-plumber');
const uglify     = require('gulp-uglify');
const bower      = require('gulp-bower');
const bowerFiles = require('main-bower-files');

module.exports = function (callback) {

	console.info('Compiling Additional Javascripts');

	const bowerFilesConf = {
				'paths': {
					'bowerDirectory': path.resolve(CONFIG.path.libaries),
					'bowerJson'     : path.resolve(CONFIG.path.builder, "config", "bower.json"),
					'bowerrc'       : path.resolve(CONFIG.path.builder, "config", ".bowerrc")
				}
			};

	const bowerConf = {
			'cwd' : path.resolve(CONFIG.path.builder, "config"),
			'cmd' : 'install'
		};

	const uglifyConf = {
				'preserveComments' : 'license'
			};

	bower(bowerConf);

	gulp.src(bowerFiles(bowerFilesConf))
		.pipe(plumber())
		.pipe(flatten())
		.pipe(uglify(uglifyConf))
		.pipe(gulp.dest(path.resolve(CONFIG.paths.static, "js", "libs.js")))
		.on('end', () => {
			callback();
		});
};

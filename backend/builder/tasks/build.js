/*jshint node:true*/
'use strict';

var 

CONFIG = require('../../../config'),

// Dependences
gulp = require('gulp-help')(require('gulp')),
runSequence = require('run-sequence'),

// tasks
tasks = {},
task = [];

module.exports = function (callback) {
	console.info('Building '+ CONFIG.server.domain);

	tasks.ui = {
		'watch' : require(CONFIG.paths.ui + '/tasks/watch'),
		'build' : require(CONFIG.paths.ui + '/tasks/build')
	};

	gulp.task('watch-ui', 'Watch UI for Semantic UI', tasks.ui.watch);
	gulp.task('build-ui', 'Build UI for Semantic UI', tasks.ui.build);

	tasks.javascripts = require(CONFIG.paths.builder + '/tasks/build/javascript');
	gulp.task('build-javascript', 'Compile any additional javascripts', tasks.javascripts);

	tasks.styles = require(CONFIG.paths.builder + '/tasks/build/css');
	gulp.task('build-styles', 'Compile any additional styles', tasks.styles);
	
	task.push('build-ui');
	task.push('watch-ui');

	task.push('build-javascript');
	task.push('build-styles');

	console.dir(task);
	console.dir(tasks);

	runSequence(task, callback);
};
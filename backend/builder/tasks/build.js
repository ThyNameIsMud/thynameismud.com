/*jshint node:true*/
'use strict';

var 

CONFIG = require(process.env.base_path + 'config'),

// Dependences
gulp = require('gulp-help')(require('gulp')),
runSequence = require('run-sequence'),

// tasks
tasks = {},
task = [];

module.exports = function (callback) {
	console.info('Building '+ CONFIG.server.domain);

	tasks.uibuilder = require(CONFIG.paths.ui + 'tasks/build');
	gulp.task('build-ui', 'Build UI for Semantic UI', tasks.uibuilder);

	tasks.javascripts = require(CONFIG.paths.builder + 'tasks/build/javascript');
	gulp.task('build-javascript', 'Compile any additional javascripts', tasks.javascripts);

	task.push('build-ui');
	task.push('build-javascript');
	
	runSequence(task, callback);
};
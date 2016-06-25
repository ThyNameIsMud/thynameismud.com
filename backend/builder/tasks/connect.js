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
	console.info("Connecting Servers");

	tasks.frontend = require(CONFIG.paths.builder + 'tasks/connect/frontend');
	gulp.task('connect-frontend', 'Connect Frontend Server', tasks.frontend);

	//tasks.backend = require(CONFIG.paths.builder + 'tasks/connect/backend');
	//gulp.task('connect-backend', 'Connect Backend APIs', tasks.backend);

	task.push('connect-frontend');
	//task.push('connect-backend');
	
	runSequence(task, callback);
};

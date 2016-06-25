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
	console.info("Setting up watchers");

	tasks.ui = require(CONFIG.paths.ui + 'tasks/watch');
	gulp.task('watch-ui', 'Watch UI for Changes', tasks.ui);

	tasks.output = require(CONFIG.paths.builder + 'tasks/watch/output');
	gulp.task('watch-output', 'Build UI for Semantic UI', tasks.output);

	task.push('watch-ui');
	task.push('watch-output');

	runSequence(task, callback);
};

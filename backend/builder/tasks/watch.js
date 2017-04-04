'use strict';

const path   = require('path');
const CONFIG = require(path.resolve('config.js'));

// Dependences
const gulp        = require('gulp-help')(require('gulp'));
const runSequence = require('run-sequence');

// tasks
const tasks = {};
const task  = [];

module.exports = function (callback) {
	console.info("Setting up watchers");

	tasks.ui = require(path.resolve(CONFIG.path.ui, "tasks", "watch"));
	gulp.task('watch-ui', 'Watch UI for Changes', tasks.ui);

	tasks.output = require(path.resolve(CONFIG.path.builder, "tasks", "watch", "output"));
	gulp.task('watch-output', 'Build UI for Semantic UI', tasks.output);

	task.push('watch-ui');
	task.push('watch-output');

	runSequence(task, callback);
};

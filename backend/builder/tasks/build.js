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
	console.info('Building '+ CONFIG.server.domain);

	tasks.uibuilder = require(path.resolve(CONFIG.path.ui, "tasks", "build.js"));
	gulp.task('build-ui', 'Build UI for Semantic UI', tasks.uibuilder);

	tasks.javascripts = require(path.resolve(CONFIG.path.builder, "tasks", "build", "javascript"));
	gulp.task('build-javascript', 'Compile any additional javascripts', tasks.javascripts);

	task.push('build-ui');
	task.push('build-javascript');

	runSequence(task, callback);
};

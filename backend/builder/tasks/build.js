/*jshint node:true*/
'use strict';

var 

// Dependences
gulp = require('gulp-help')(require('gulp')),
runSequence = require('run-sequence'),

// tasks
tasks = [];

module.exports = function (CONFIG, callback) {
	console.info('Building '+ CONFIG.server.domain);
	tasks.push('build-ui');
	tasks.push('watch-ui');

	tasks.push('build-javascript');
	tasks.push('build-css');

	runSequence(tasks, callback);
};
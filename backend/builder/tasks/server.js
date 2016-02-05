/*jshint node:true*/
'use strict';

var 

// Dependences
gulp = require('gulp-help')(require('gulp')),
runSequence = require('run-sequence'),
console = require('better-console'),

// tasks
tasks = [];

module.exports = function (CONFIG, callback) {
	gulp.start('build');

	//tasks.push('watch-ui');
	//tasks.push('build-ui');

	runSequence(tasks, callback);
};
 

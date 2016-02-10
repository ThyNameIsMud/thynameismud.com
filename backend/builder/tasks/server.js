/*jshint node:true*/
'use strict';

var 

CONFIG = require('../../../config'),

// Dependences
gulp = require('gulp-help')(require('gulp')),
runSequence = require('run-sequence'),

// tasks
tasks = [];

module.exports = function (callback) {
	gulp.start('build');

	//tasks.push('watch-ui');

	//runSequence(tasks, callback);
};
 

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
	
	tasks.push('watch-ui');
	tasks.push('watch-frontend');
	
	runSequence(tasks, callback);
};
 
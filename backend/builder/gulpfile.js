/*jshint node:true*/
'use strict';

// config
var CONFIG = require('../../config'),

// dependences
gulp  = require('gulp-help')(require('gulp')),
paths = {},
tasks = {};
// tasks
gulp.task('default', false, [
	'server'
]);

// main tasks
tasks.build = require(CONFIG.paths.builder + '/tasks/build');
gulp.task('build', 'Build the files', tasks.build);

tasks.server = require(CONFIG.paths.builder + '/tasks/server');
gulp.task('server', 'Start the server', tasks.server);

tasks.javascripts = require(CONFIG.paths.builder + '/tasks/build/javascript');
gulp.task('build-javascript', 'Compile any additional javascripts', tasks.javascripts);

tasks.styles = require(CONFIG.paths.builder + '/tasks/build/css');
gulp.task('build-styles', 'Compile any additional styles', tasks.styles);

// subtasks - ui
tasks.ui = {
	'watch' : require(CONFIG.paths.ui + '/tasks/watch'),
	'build' : require(CONFIG.paths.ui + '/tasks/build')
};

gulp.task('watch-ui', 'Watch UI for Semantic UI', tasks.ui.watch);
gulp.task('build-ui', 'Build UI for Semantic UI', tasks.ui.build);
/*jshint node:true*/
'use strict';

// config
var CONFIG = require(process.env.base_path + 'config'),

// dependences
gulp  = require('gulp-help')(require('gulp')),
paths = {},
tasks = {};

// main tasks
gulp.task('default', false, [
	'watch'
]);

tasks.connect = require(CONFIG.paths.builder + 'tasks/connect');
gulp.task('connect', 'Connect Frontend and Backend APIs', tasks.connect);

tasks.build = require(CONFIG.paths.builder + 'tasks/build');
gulp.task('build', 'Build the files', tasks.build);

tasks.watch = require(CONFIG.paths.builder + 'tasks/watch');
gulp.task('watch', 'Start the server', tasks.watch);

//SUBTASKS

//servers
tasks.frontend = require(CONFIG.paths.builder + 'tasks/connect/frontend');
gulp.task('connect-frontend', 'Connect Frontend Server', tasks.frontend);

//tasks.backend = require(CONFIG.paths.builder + 'tasks/connect/backend');
//gulp.task('connect-backend', 'Connect Backend APIs', tasks.backend);

//watchers
tasks.output = require(CONFIG.paths.builder + 'tasks/watch/output');
gulp.task('watch-output', 'Watch outputed files to reload server', tasks.output);

// builds
tasks.javascripts = require(CONFIG.paths.builder + 'tasks/build/javascript');
gulp.task('build-javascript', 'Compile any additional javascripts', tasks.javascripts);

// ui
tasks.ui = {
	'watch' : require(CONFIG.paths.ui + 'tasks/watch'),
	'build' : require(CONFIG.paths.ui + 'tasks/build')
};

gulp.task('watch-ui', 'Watch UI for Semantic UI', tasks.ui.watch);
gulp.task('build-ui', 'Build UI for Semantic UI', tasks.ui.build);


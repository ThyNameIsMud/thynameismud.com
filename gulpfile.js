'use strict';

const path = require('path');

// config
const CONFIG = require(path.resolve('config.json'));

// dependences
const gulp  = require('gulp-help')(require('gulp'));
const paths = {};
const tasks = {};

// main tasks
gulp.task('default', false, [
	'watch'
]);

tasks.build = require(path.resolve(CONFIG.path.builder, "tasks", "build.js"));
gulp.task('build', 'Build the files', tasks.build);

tasks.watch = require(path.resolve(CONFIG.path.builder, "tasks", "watch.js"));
gulp.task('watch', 'Start the server', tasks.watch);

//SUBTASKS

//watchers
tasks.output = require(path.resolve(CONFIG.path.builder, "tasks", "watch", "output.js"));
gulp.task('watch-output', 'Watch outputed files to reload server', tasks.output);

// builds
tasks.javascripts = require(path.resolve(CONFIG.path.builder, "tasks", "build", "javascript.js"));
gulp.task('build-javascript', 'Compile any additional javascripts', tasks.javascripts);

// ui
tasks.ui = {
	'watch' : require(path.resolve(CONFIG.path.builder, "tasks", "watch.js")),
	'build' : require(path.resolve(CONFIG.path.builder,"tasks", "build.js"))
};

gulp.task('watch-ui', 'Watch UI for Semantic UI', tasks.ui.watch);
gulp.task('build-ui', 'Build UI for Semantic UI', tasks.ui.build);


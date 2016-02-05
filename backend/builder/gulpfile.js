/*jshint node:true*/
'use strict';

// config
var CONFIG = require('config.json'),

// dependences
gulp  = require('gulp-help')(require('gulp')),
paths = {},
tasks = {};

// paths
for (var path in CONFIG.paths) {
	paths[path] = [];
	paths[path].push(CONFIG.path.base);
	paths[path].push(CONFIG.paths[path]);
}

// tasks
gulp.task('default', false, [
	'server'
]);

// main tasks
tasks.build = require(paths.builder.join('/') + 'build')(CONFIG);
gulp.task('build', 'Build the files', tasks.build);

tasks.server = require(paths.server.join('/') + 'server')(CONFIG);
gulp.task('server', 'Start the server', tasks.server);

tasks.javascripts = require(paths.javascripts.join('/'))(CONFIG);
gulp.task('build-javascript', 'Compile any additional javascripts', tasks.javascripts);

tasks.styles = require(paths.styles.join('/'))(CONFIG);
gulp.task('build-styles', 'Compile any additional styles', tasks.styles);

// subtasks - ui
tasks.ui = {
	'watch' : require(paths.ui.join('/') + 'tasks/watch'),
	'build' : require(paths.ui.join('/') + 'tasks/build')
};

gulp.task('watch-ui', 'Watch UI for Semantic UI', tasks.ui.watch);
gulp.task('build-ui', 'Build UI for Semantic UI', tasks.ui.build);
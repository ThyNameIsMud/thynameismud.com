/*jshint node:true*/
'use strict';

// https://github.com/sindresorhus/grunt-concurrent

// Run grunt tasks concurrently.

module.exports = function () {
	return {
		options: {
			logConcurrentOutput: true
		},
		develop : [
			'neuter:libsDevelop',
			'neuter:app',
			'compass:build',
			'watch',
			'nodemon'
		],
		build : [
			'neuter:libsBuild',
			'neuter:app',
			'compass:build',
			'jshint',
		]
	};
};
'use strict';

const path   = require('path');
const CONFIG = require(path.resolve('config.js'));

// Dependences
const gulp    = require('gulp-help')(require('gulp'));
const nodemon = require('gulp-nodemon');

module.exports = function (callback) {
	console.info("Connecting Server");

	nodemon({
		script: path.resolve(CONFIG.path.servers, "backend.js"),
		watch: [path.resolve(CONFIG.path.servers)]
	});
};

'use strict';

const path   = require('path');
const CONFIG = require(path.resolve("config.json"));
const paths  = [];

CONFIG.paths = {};

for (let poop in CONFIG.path) {
	CONFIG.paths[poop] = path.resolve(CONFIG.path[poop]);
}

module.exports = CONFIG;

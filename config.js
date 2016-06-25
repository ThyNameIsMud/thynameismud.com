/*jshint node:true*/
var

base_path = process.env.base_path,
CONFIG = require(base_path + "config.json"),
paths = [];

for (var path in CONFIG.path) {
	paths[path] = [];
	paths[path].push(base_path.substring(0, base_path.length - 1));
	paths[path].push(CONFIG.path[path]);
	CONFIG.paths[path] = paths[path].join('/');
}

module.exports = CONFIG;
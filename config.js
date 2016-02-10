/*jshint node:true*/
var

CONFIG = require(__dirname + "/config.json"),
paths = [];

for (var path in CONFIG.path) {
	paths[path] = [];
	paths[path].push(CONFIG.path.base);
	paths[path].push(CONFIG.path[path]);
	CONFIG.paths[path] = paths[path].join('/');
}

module.exports = CONFIG;
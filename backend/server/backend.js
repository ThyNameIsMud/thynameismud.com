'use strict';

const Hapi   = require('hapi');
const path   = require('path');
const util   = require('util');
const CONF   = require(path.resolve('config.json'));
const config = require(path.resolve(CONF.path.servers, "config", "backend.js"));

/*
   ____             __ _
  / ___|___  _ __  / _(_) __ _
 | |   / _ \| '_ \| |_| |/ _` |
 | |__| (_) | | | |  _| | (_| |
  \____\___/|_| |_|_| |_|\__, |
                         |___/
*/

var server = new Hapi.Server({
	cache: config.cache,
  debug: config.debug
});

server.connection({port: config.port, labels: 'app'});

/*
  ____  _             _
 |  _ \| |_   _  __ _(_)_ __  ___
 | |_) | | | | |/ _` | | '_ \/ __|
 |  __/| | |_| | (_| | | | | \__ \
 |_|   |_|\__,_|\__, |_|_| |_|___/
                |___/
*/

server.register([
    {
        register: require('inert') // https://github.com/hapijs/inert - Static file and directory handlers plugin for hapi.js
    },
    {
        register: require('lout') // https://github.com/hapijs/lout - API documentation generator for hapi.js
    },
    {
        register: require('vision') // https://github.com/hapijs/vision - Templates rendering plugin support for hapi.js
    },
	{
        register: require('tv') // https://github.com/hapijs/tv - TV is an interactive debug console plugin for hapi.js
    },
    {
    	register: require('poop'),
    	options: {
    		logPath: path.resolve("poop.log")
    	}
    },
    {
    	register: require('good'), // https://github.com/hapijs/good - hapi.js process monitoring
    	options: {
    		ops: {
    			interval: 30000
    		},
    		reporters: {
    			mudConsole: [{
    				module: 'good-console'
				}, 'stdout']
    		}
    	}
    }
], (err) => {
    if (err) {
        console.error('Failed to load a plugin:', err);
    }

    server.start(() => {
		server.log(['app', 'info'], server.info);
	});
});

/*
  ____             _
 |  _ \ ___  _   _| |_ ___  ___
 | |_) / _ \| | | | __/ _ \/ __|
 |  _ < (_) | |_| | ||  __/\__ \
 |_| \_\___/ \__,_|\__\___||___/

*/
server.route(require(path.resolve(CONF.path.servers, "routes/lib")));
server.route(require(path.resolve(CONF.path.servers, "routes/compiled")));
server.route(require(path.resolve(CONF.path.servers, "routes/index")));
server.route(require(path.resolve(CONF.path.servers, "routes/links")));

/*
  _____                 _
 | ____|_   _____ _ __ | |_ ___
 |  _| \ \ / / _ \ '_ \| __/ __|
 | |___ \ V /  __/ | | | |_\__ \
 |_____| \_/ \___|_| |_|\__|___/

*/

server.on("log", function(event, tags) {
    const tagsJoined = Object.keys(tags).join();
	const message = event.data;

    console.log("Log entry [" + tagsJoined + "] (" + (util.inspect(message) || "") + ")");
});

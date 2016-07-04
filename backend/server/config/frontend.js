/*jshint node:true*/

var 

CONFIG = require(process.env.base_path + 'config')

;

module.exports = {
        hostname: CONFIG.server.frontend.host,
        port: CONFIG.server.frontend.port,
        debug: { log: ['error'] },
        urls: {
            failureRedirect: '/login',
            successRedirect: '/'
        },
        views: {
            engines: {
                html: require('handlebars'),
            },
            path:  CONFIG.paths.templates,
            layoutPath: CONFIG.paths.templates + 'layout',
            layout: 'default',
            partialsPath: CONFIG.paths.templates + 'partials'
        },
        cache: {
            engine: require('catbox-redis'),
            options: {
                host: "127.0.0.1",
                partition: "tnim"
            }
        },
        files: {
            path: 'cwd'
        }
    };
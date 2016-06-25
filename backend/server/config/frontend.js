/*jshint node:true*/

var 

CONFIG = require(process.env.base_path + 'config')

;

module.exports = {
        hostname: 'localhost',
        port: 3210,
        debug: { log: ['error'] },
        urls: {
            failureRedirect: '/login',
            successRedirect: '/'
        },
        views: {
            engines: {
                html: require('handlebars'),
            },
            path:  CONFIG.paths.templates
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
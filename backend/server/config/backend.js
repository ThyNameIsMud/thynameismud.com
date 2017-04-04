'use strict';

const path = require('path');
const CONF = require(path.resolve('config.json'));

module.exports = {
    hostname: CONF.server.backend.host,
    port: CONF.server.backend.port,
    debug: { log: ['error'] },
    urls: {
        failureRedirect: '/login',
        successRedirect: '/'
    },
    views: {
        engines: {
            html: require('handlebars'),
        },
        path:  path.resolve(CONF.path.templates),
        layoutPath: path.resolve(CONF.path.templates, "layout"),
        layout: 'default',
        partialsPath: path.resolve(CONF.path.templates, "partials")
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

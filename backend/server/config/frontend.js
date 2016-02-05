/*jshint node:true*/

module.exports = function (CONFIG) {
    var server = {
        hostname: '127.0.0.1',
        port: 3000,
        debug: { log: ['error'] },
        urls: {
            failureRedirect: '/login',
            successRedirect: '/'
        },
        views: {
            engines: {
                jade: require('jade'),
            },
            path: __dirname + '/templates',
            compileMode: 'sync'
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
};
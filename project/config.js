module.exports = {
    hostname: '127.0.0.1',
    port: 3000,
    urls: {
        failureRedirect: '/login',
        successRedirect: '/'
    },
    views: {
        engines: {
            jade: require('jade'),
        },
        path: __dirname + '/templates',
        compileOptions: {
            pretty: true
        }
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

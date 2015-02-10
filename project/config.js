module.exports = {
    hostname: 'localhost',
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
            host: "localhost",
            partition: "tnim"
        }
    },
    files: {
        path: 'cwd'
    }
};

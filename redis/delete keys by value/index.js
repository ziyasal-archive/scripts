var redisScan = require('redisscan');
var async = require("async");

var logger = require('tracer').colorConsole();
var argv = require('yargs').argv;

var redis = require('redis').createClient({ host: argv.host || 'localhost', port: argv.port || 6379, db: argv.db || 0 });

var keyList = [];

logger.log('pattern %s, prop: %s, value: %s', argv.pattern, argv.prop, argv.val);

redisScan({
    redis: redis,
    pattern: argv.pattern,
    each_callback: function (type, key, subkey, length, value, cb) {
        logger.log(value);
        var jsonObj;
        try { jsonObj = JSON.parse(value); } catch (error) { }

        try {
            if (jsonObj && (argv.prop in jsonObj) && jsonObj[argv.prop] == argv.val) {
                keyList.push(key);
                redis.del(key);
                logger.log('Key: %s deleted.', key);
            }
        } catch (error) {
            logger.error(error);
            logger.error('An error occurred while deleting key:%s', key);
        }

        cb();
    },
    done_callback: function (err) {
        redis.quit();
        logger.log(keyList);
    }
});
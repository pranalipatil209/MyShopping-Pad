var bunyan = require('bunyan');

//default options
defaults = {name:'Shopping Pad'};

//singleton
var logger,
    createLogger = function createLogger(options){
        var opts;
        if(logger){
            return logger;
        }
        logger = bunyan.createLogger(defaults);
        return logger;
    }
    ,log = createLogger;
module.exports = new log();
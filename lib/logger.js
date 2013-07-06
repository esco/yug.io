var winston = require('winston');
var logger = new winston.Logger();

logger.add(winston.transports.Console, {colorize: true})
	.add(winston.transports.File, {filename: process.env.APP_LOG_FILE.toString()});

module.exports = logger;

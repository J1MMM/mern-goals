const logger  = require('./logger');

const reqLog = (req, res, next) => {
	logger(`${req.method}\t${req.url}\t${req.origin}`, 'reqLog.log')
	console.log(req.method);
	next()
}

module.exports = reqLog
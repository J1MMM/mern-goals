const logger  = require('./logger');

const errLog = (err, req, res, next) => {
	logger(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.header.origin}`, 'errLog.log')
	
	const status = req.statusCode ? req.statusCode : 400;

	res.status(status).json({
		message: err.message, 
		stack: process.env.NODE_ENV === 'production' ? null : err.stack  
	})
}

module.exports = errLog
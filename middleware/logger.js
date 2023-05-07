const path = require('path');
const { format } = require('date-fns')
const { v4:uuid } = require('uuid')
const fs = require('fs');
const fsPromises = fs.promises

const logger = async(message, logFileName) =>{
	const dateTime = format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')
	const logItems = `${message}\t${uuid()}\t${dateTime}\n`

	try{
		if(!fs.existsSync(path.join(__dirname, '..', 'logs'))){
			await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
		}

		await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logFileName), logItems)
	}catch(err){
		console.log(err);
	}
}



module.exports = logger
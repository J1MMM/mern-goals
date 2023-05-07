require('dotenv').config();
const express = require('express');
const  app = express();
const PORT = process.env.PORT || 3000;

// dependencies
const cookieParser = require('cookie-parser')
const path = require('path');
//module export
const reqLog = require('./middleware/reqLog')
const errLog = require('./middleware/errLog')

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(reqLog)

// routing
app.use('/api/goals', require(path.join(__dirname, 'routes', 'goalsRoute')))
// middleware error log
app.use(errLog)


app.listen(PORT, () => console.log(`server running on port ${PORT}`));
const createError = require('http-errors')
const express = require('express')
const logger = require('morgan') //for console printing
const config = require('./config')
const app = express()
const env = require('./env')
const cors = require('cors')

app.use(cors())
app.use(logger('dev')) // for console printing
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', require('./router'))

const http = require('http').Server(app)
http.listen(config[env].port.api, function () {
  console.log(`API Server On PORT : ${config[env].port.api}`)
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app;

const express = require('express')
const router = express.Router()

router.use('/news', require('./api/news/news.router'))

router.use('/', function (req, res) {
  res.send('<html><body><p>Welcome to News API!</p></body></html>')
})

module.exports = router;

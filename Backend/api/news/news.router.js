let _router = require('express').Router()
let _components = require('./news.controller')

_router.get('/all', _components.getAll)
_router.get('/headlines', _components.getHeadlines)
_router.get('/category', _components.getSources)

module.exports = _router;

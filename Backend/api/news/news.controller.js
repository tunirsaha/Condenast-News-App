const config = require('../../config')
const env = require('../../env')
let response = require('../commonResponse/commonResponse.controller')
const axios = require('axios')

module.exports = {
    getAll: async (req, res) => {
        axios.get('https://newsapi.org/v2/everything?q=' + config[env].countryName + '&apiKey=' + config[env].apiKey)
            .then(reply => {
                if (reply && reply.data && reply.data.status == 'ok')
                    response.sendResponse(res, true, 200, 'List Fetched Successfully', reply.data.articles)
            }).catch(err => {
                response.sendResponse(res, true, 501, 'Server Error!', err)
            })
    },
    getHeadlines: async (req, res) => {
        axios.get('https://newsapi.org/v2/top-headlines?country=' + config[env].countryCode + '&apiKey=' + config[env].apiKey)
            .then(reply => {
                if (reply && reply.data && reply.data.status == 'ok')
                    response.sendResponse(res, true, 200, 'List Fetched Successfully', reply.data.articles)
            }).catch(err => {
                response.sendResponse(res, true, 501, 'Server Error!', err)
            })
    },
    getSources: async (req, res) => {
        axios.get('https://newsapi.org/v2/sources?country=' + config[env].countryCode + '&apiKey=' + config[env].apiKey)
            .then(reply => {
                if (reply && reply.data && reply.data.status == 'ok')
                    response.sendResponse(res, true, 200, 'List Fetched Successfully', reply.data.sources)
            }).catch(err => {
                response.sendResponse(res, true, 501, 'Server Error!', err)
            })
    }
}


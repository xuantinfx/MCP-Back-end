const {responseData} = require("../../utilities/responseData")
const {translate} = require('../../translate/translate')
const _ = require('lodash')

module.exports = (req, res, next) => {
    responseData(res, req.user, 200, {error: [], message: []})
}
const {responseData} = require("../../utilities/responseData")

module.exports = (req, res, next) => {
   responseData(res, {a: 1})
}
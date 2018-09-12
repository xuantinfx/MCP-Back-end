var express = require('express');
var router = express.Router();
let usersRouter = require('./users')

router.use('/api/v1/user', usersRouter)

module.exports = router;

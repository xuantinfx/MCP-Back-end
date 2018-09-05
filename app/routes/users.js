var express = require('express');
var router = express.Router();
const register = require('../controller/user/register')

/* GET users listing. */
router.post('/register', register);

module.exports = router;

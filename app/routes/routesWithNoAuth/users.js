var express = require('express');
var router = express.Router();
const register = require('../../controller/user/register')
const login = require('../../controller/user/login')

// Register New User
router.post('/register', register);
router.post('/login', login);

module.exports = router;

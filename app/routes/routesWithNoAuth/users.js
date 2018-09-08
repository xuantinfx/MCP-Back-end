var express = require('express');
var router = express.Router();
const register = require('../../controller/user/register')

// Register New User
router.post('/register', register);

module.exports = router;

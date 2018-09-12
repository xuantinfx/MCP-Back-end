var express = require('express');
var router = express.Router();
const viewProfile = require('../../controller/user/viewProfile')
const checkIfLogin = require('../../controller/user/checkIfLogin')

// Register New User
router.get('/view-profile', viewProfile);
router.get('/check-if-login', checkIfLogin);

module.exports = router;

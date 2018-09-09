var express = require('express');
var router = express.Router();
const viewProfile = require('../../controller/user/viewProfile')

// Register New User
router.get('/view-profile', viewProfile);

module.exports = router;

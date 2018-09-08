var express = require('express');
var router = express.Router();

router.get('/a', (req, res) => {
    res.end('aaaa');
});

module.exports = router;

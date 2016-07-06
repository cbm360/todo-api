var express = require('express');
var router = express.Router();

// Application frontend
router.get('/', function(req, res) {
    res.sendfile('./public/index.html');
});

module.exports = router;
var express = require('express');
var router = express.Router();
var {homepage_label} = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', homepage_label });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var {users} = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {
    title: 'Users',
    users: users,
    styles: '<link rel="stylesheet" href="/stylesheets/users.css" />'
  })
});

module.exports = router;

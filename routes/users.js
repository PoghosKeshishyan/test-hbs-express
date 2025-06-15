var express = require('express');
var router = express.Router();
var {users} = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {
    title: 'Users',
    users: users,
    styles: '<link rel="stylesheet" href="/stylesheets/users.css" />',
    currentPath: req.originalUrl
  })
});

router.get('/:id', function(req, res) {
  const id = req.params.id;
  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    return res.status(404).send('User not found');
  }

  res.render('user-view', {
    title: 'User Details - ' + user.name,
    user,
    currentPath: req.originalUrl
  });
});


module.exports = router;

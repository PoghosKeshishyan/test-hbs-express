const express = require('express');
const router = express.Router();
const { aboutpage_label } = require('../db');

router.get('/', (req, res) => {
    res.render('about', {title: "ABOUT PAGE", aboutpage_label})
})

module.exports = router;
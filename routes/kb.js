'use strict';

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.param('category', (req, res, next, value)=> {
    req.category = value;
    next();
});

router.param('content', (req, res, next, value)=> {
    req.content = value;
    next();
});

router.get('/:category/:content', (req, res, next)=> {
    res.redirect(`/kb/data/${req.category}/${req.content}/index.html`);
});

module.exports = router;
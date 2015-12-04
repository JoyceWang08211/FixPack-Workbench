'use strict';

var express = require('express');
var router = express.Router();
const properties = require('../private/util/propertiesUtil');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('crawler/crawler');
});

router.get('/get_setting', (req, res)=> {
    res.json(properties.getRawObjString());
})

module.exports = router;

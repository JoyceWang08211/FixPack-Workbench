'use strict';
const co = require('co');

var express = require('express');
var router = express.Router();
const properties = require('../private/util/propertiesUtil');

//crawler
const crawler = require(require('app-root-path') + '/private/crawler/crawler');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('crawler/crawler');
});

router.get('/get_setting', (req, res)=> {
    res.json(properties.getRawObjString());
});

function updatePropertiesObj(req, res, next) {
    let obj = properties.getRawObj();

    obj.user_info = {
        username: req.body.username,
        password: req.body.password
    };

    obj.fixpack_info = {
        ticket: req.body.fpTicket,
        name: req.body.fpName,
        build: req.body.fpBuild
    };

    obj.crawler_info = {
        url: req.body.patchURL,
        url_baseline: req.body.baselineURL,
        build: req.body.crawlerBuild,
        isBaseline: req.body.isBaseline
    };

    obj.jenkins_info = {
        host: req.body.jenkinsHost
    };

    properties.setProperties(obj);

    next();
}

router.post('/save_setting', updatePropertiesObj, (req, res)=> {
    res.redirect('/crawler');
});

router.post('/start_job', (req, res)=> {
    co(crawler.crawler())
        .catch((err)=> {
            console.error(err.stack);
        });

    res.json({status: 1});
});

router.post('/progress_query', (req, res)=> {
    req.body.progress += 0.01;

    res.json({progress: req.body.progress});
})

module.exports = router;

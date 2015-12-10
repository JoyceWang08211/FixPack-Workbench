'use strict';
const co = require('co');

var express = require('express');
var router = express.Router();
const properties = require('../private/util/propertiesUtil');
const barUtil = require('../private/util/processBarUtil');

//crawler
const crawler = require(require('app-root-path') + '/private/crawler/crawler');

let locked = false;

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
    if (!locked) {
        locked = true;
        barUtil.initCrawlerBar();
        co(crawler.crawler())
            .then(()=> {
                locked = false;
                res.json({status: 1});
            })
            .catch((err)=> {
                locked = false;
                res.json({status: 0, message: err.stack});
            });
    }
    else {
        res.json({status: 0, message: 'The current crawler is running..'})
    }

});

router.post('/progress_query', (req, res)=> {
    let state = {
        buildProgress: barUtil.getCrawlerBuildBarProcess(),
        testcaseProgress: barUtil.getCrawlerTestcaseBarProcess(),
        copProgress: barUtil.getCrawlerCopBarProcess()
    }

    if (state.buildProgress * state.testcaseProgress * state.copProgress < 1)
        state.status = 0;
    else
        state.status = 1;

    res.json(state);
});

module.exports = router;

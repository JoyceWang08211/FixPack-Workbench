'use strict';
const co = require('co');

var express = require('express');
var router = express.Router();
const properties = require('../private/util/propertiesUtil');
const barUtil = require('../private/util/processBarUtil');
const logUtil = require('../private/util/logsUtil');
const timeUtil = require('../private/util/timeUtil');
const fs = require('fs');

//crawler
const appRoot = require('app-root-path');
const crawler = require(appRoot + '/private/crawler/crawler');
const comparator = require(appRoot + '/private/comparator/comparator');

let locked = false;

/* GET home page. */
router.get('/', function (req, res, next) {
  var metaData = {
    base: req.app.get('env') === 'development' ? '' : 'build'
  }
  res.render('crawler/crawler', metaData);
});

router.get('/get_setting', (req, res)=> {
  res.json(properties.getRawObjString());
});

router.get('/get_history', (req, res)=> {
  res.json({fileList: ['test1', 'test2', 'test3']});
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

  properties.setProperties(obj, next);
}

router.post('/save_setting', updatePropertiesObj, (req, res)=> {
  res.redirect('/crawler');
});

router.post('/start_job', (req, res)=> {
  if (!locked) {
    //TODO locked = true;
    barUtil.initCrawlerBar();
    logUtil.initCrawlerLogs();

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

router.post('/get_compare', (req, res)=> {
  //TODO check if could start compare
  let payload = {
    rows: comparator.compare(),
    metadata:{
      folderName: '6.2 Fix Pack AA 2015',
      fileName: ` 62 Fixpack AA - ${timeUtil.getMonthName()} 2016`,
      sheetName: properties.getFixPackInfo().name
    }
  };

  res.json(payload);
});

router.post('/progress_query', (req, res)=> {
  let state = {
    buildProgress: barUtil.getCrawlerBuildBarProcess(),
    testcaseProgress: barUtil.getCrawlerTestcaseBarProcess(),
    copProgress: barUtil.getCrawlerCopBarProcess(),
    logContent: logUtil.getCrawlerLogObj()
  };

  if (state.buildProgress * state.testcaseProgress * state.copProgress < 1)
    state.status = 0;
  else
    state.status = 1;

  res.json(state);
});

module.exports = router;

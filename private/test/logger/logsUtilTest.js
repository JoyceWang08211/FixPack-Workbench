'use strict';

const appRoot = require('app-root-path');
const logsUtil = require(appRoot + '/private/util/logsUtil');

logsUtil.getCrawlerLogs(appRoot + '/private/crawler/logs/crawler.log').then((logs)=> {
    console.log(logs)
});




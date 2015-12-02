"use strict";

let co = require('co');
let crawler = require('./crawler');
//default is false
co(crawler.crawler(true))
    .catch((err)=> {
        console.error(err.stack);
    });

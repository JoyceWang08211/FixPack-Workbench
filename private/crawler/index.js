"use strict";

let co = require('co');
let crawler = require('./crawler');

co(crawler.crawler)
    .catch((err)=> {
        console.error(err.stack);
    });
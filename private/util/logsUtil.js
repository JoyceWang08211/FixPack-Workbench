"use strict";

let fs = require('fs');
let fse = require('fs-extra');
const appRoot = require('app-root-path');

class Logs {
    constructor() {
    }

    readLogs(path) {
        return fs.readFileSync(path);
    }

    getCrawlerLogs() {
        fse.ensureFileSync(`${appRoot}/private/crawler/logs/crawler.log`);
        return this.readLogs(`${appRoot}/private/crawler/logs/crawler.log`).toString();
    }
}

module.exports = new Logs();

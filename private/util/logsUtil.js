'use strict';

let fs = require('fs');
let fse = require('fs-extra');
let path = require('path');

const lineReader = require('line-reader');
const appRoot = require('app-root-path');

class Logs {
    constructor() {
        this.crawlerLogObj = []
    }

    getCrawlerLogObj() {
        return this.crawlerLogObj;
    }

    setCrawlerLogObj(obj) {
        this.crawlerLogObj = obj;
    }

    appendCrawlerLogObj(entry) {
        this.crawlerLogObj.push(entry);
    }

    readLogByEachLine(filename, options) {
        return new Promise((resolve, reject)=> {
            let content = [];

            lineReader.eachLine(filename, options, function (line, last) {
                //console.log(line);
                content.push(line);

                if (last)
                    resolve(content);

                return !last;
            })
        });
    }

    getCrawlerLogs(filename) {
        const absoluteFilePath = path.resolve(appRoot.toString(), filename);

        fse.ensureFileSync(absoluteFilePath);

        return this.readLogByEachLine(absoluteFilePath, {encoding: 'utf8'});
    }

    initCrawlerLogs() {
        this.crawlerLogObj = []
    }
}

module.exports = new Logs();

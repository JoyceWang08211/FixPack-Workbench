'use strict';

const log4js = require('log4js');
const fse = require('fs-extra');
const appRoot = require('app-root-path');

let instance;

class Logger {
    constructor() {
    }

    getLogger(category, config) {
        if (!instance) {
            const configObj = config.constructor == Object ? config : fse.readJsonSync(config);

            //TODO 路径需要调整
            fse.removeSync(`${appRoot}/private/crawler/logs/crawler.log`);
            fse.ensureFileSync(`${appRoot}/private/crawler/logs/crawler.log`);

            log4js.configure(configObj);

            instance = log4js.getLogger(category)
        }

        return instance;
    }
}

module.exports = new Logger();


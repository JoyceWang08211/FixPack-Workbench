'use strict';

const log4js = require('log4js');
const fse = require('fs-extra');
const appRoot = require('app-root-path');
const path = require('path');

let instance;

class Logger {
    constructor() {
    }

    getLogger(category, config) {
        if (!instance) {
            const configObj = config.constructor == Object ? config : fse.readJsonSync(config);

            for (let appender of configObj.appenders) {
                let absoluteFilePath = path.resolve(appRoot.toString(), appender.filename);
                console.log(absoluteFilePath);
                fse.removeSync(absoluteFilePath);
                fse.ensureFileSync(absoluteFilePath);

                appender.filename = absoluteFilePath;
            }

            log4js.configure(configObj);

            instance = log4js.getLogger(category)
        }

        return instance;
    }
}

module.exports = new Logger();


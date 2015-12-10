'use strict';

const log4js = require('log4js');
const fse = require('fs-extra');

let instance;

class Logger {
    constructor() {
    }

    getLogger(category, config) {
        console.log(config);

        if (!instance) {
            const configObj = config.constructor == Object ? config : fse.readJsonSync(config);

            for (let appender of configObj.appenders) {
                fse.removeSync(appender.filename);
                fse.ensureFileSync(appender.filename);
            }

            log4js.configure(configObj);

            instance = log4js.getLogger(category)
        }

        return instance;
    }
}

module.exports = new Logger();


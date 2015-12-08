const loggerUtil = require('../../util/log4jsLoggerUtil');
const appRoot = require('app-root-path');

const logger = loggerUtil.getLogger('test', `${appRoot}/private/test/logger/log4js_cfg.json`);

describe('Logger Testing', ()=> {
    it('should return I am message', ()=> {
        logger.info('I am message');
    })
})
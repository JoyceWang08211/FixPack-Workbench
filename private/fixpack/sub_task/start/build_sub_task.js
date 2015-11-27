'use strict';
const appRoot = require('app-root-path');
const properties = require(appRoot + '/private/util/propertiesUtil.js');
const fetch = require('node-fetch');
const cheerio = require('cheerio');

const setting = properties.getSubTaskInfo();
const user = properties.getUserInfo();

describe('Fix Pack Build Sub Tasks', function () {
    let LPECache = [];
    let LPSCache = [];

    this.timeout(1000 * 60 * 60);

    before(function* () {
        yield browser.url('https://issues.liferay.com/browse/LRQA-19810');
        yield browser.setValue('#login-form-username', user.username);
        yield browser.setValue('#login-form-password', user.password);
        let title = yield browser.click('#login-form-submit').getTitle();

        return assert.eventually.equal(Promise.resolve(title), `[${setting.ticket}] Fix Pack Testing: ${setting.fixpack} - Liferay Issues`);
    });

    it('Catch LPE list..', function* () {
        const LPEs = yield browser.elements('//div[@id="description-val"]/div[1]/p[1]/a');
        LPECache = yield LPEs.value.map((LPE)=> {
            let id = LPE.ELEMENT;
            return browser.elementIdAttribute(id, 'data-issue-key').then((e)=> {
                return e.value;
            });
        });
        LPECache = LPECache.sort((a, b)=> {
            let tag = parseInt(a.split('-')[1]) - parseInt(b.split('-')[1]);

            return tag < 0 ? -1 : 1;
        });
    });

    it('Catch LPS list..', function* () {
        LPSCache = new Map(yield LPECache.map((c)=> {
                return new Promise((resolve, reject)=> {
                    //console.log(properties.getURLWithAuth(`${setting.host}/${c}`));
                    fetch(properties.getURLWithAuth(`${setting.host}/${c}`))
                        .then((res)=> {
                            return res.text();
                        })
                        .then((body)=> {
                            //resolve('test')
                            let $ = cheerio.load(body);
                            $('.links-list ')
                                .find('a')
                                .each((i, e)=> {
                                    if ($(e).text().match(/^LPS-\d+$/)) {
                                        resolve([c, $(e).text()]);
                                    }
                                    else {
                                    }
                                });
                        })
                        .catch((err)=> {
                            console.log(err);
                        });
                });
            })
        );

        console.log(LPSCache);
    });
});


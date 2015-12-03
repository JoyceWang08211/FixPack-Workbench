'use strict';

const appRoot = require('app-root-path');
const properties = require(appRoot + '/private/util/propertiesUtil.js');
const fetch = require('node-fetch');
const cheerio = require('cheerio');

const subTaskInfo = properties.getSubTaskInfo();
const fixPackInfo = properties.getFixPackInfo();
const user = properties.getUserInfo();

describe('Fix Pack Build Sub Tasks Script', function () {
    let JobTitle;
    let LPECache;
    let LPSCache;

    this.timeout(1000 * 60 * 60);

    before(function* () {
        yield browser.url('https://issues.liferay.com/browse/LRQA-19810')
            .setValue('#login-form-username', user.username)
            .setValue('#login-form-password', user.password);
        let title = yield browser.click('#login-form-submit').getTitle();

        return assert.eventually.equal(Promise.resolve(title), `[${fixPackInfo.ticket}] Fix Pack Testing: ${fixPackInfo.name} - Liferay Issues`);
    });


    it('Catch Fix Pack Title..', function* () {

    });

    it('Catch LPE list..', function* () {
        const LPEs = yield browser.elements('//div[@id="description-val"]/div[1]/p[1]/a');
        LPECache = yield LPEs.value.map((LPE)=> {
            let id = LPE.ELEMENT;
            return browser.elementIdAttribute(id, 'data-issue-key').then((e)=> {
                return e.value;
            });
        });
        LPECache = new Set(LPECache.sort((a, b)=> {
            let tag = parseInt(a.split('-')[1]) - parseInt(b.split('-')[1]);

            return tag < 0 ? -1 : 1;
        }));
    });

    it('Revert duplicate LPE..', function* () {
        const subTasks = yield browser.elements('//table[@id="issuetable"]/tbody/tr/td[2]/a');
        yield subTasks.value.map((st)=> {
            let id = st.ELEMENT;
            return browser.elementIdText(id).then((e)=> {
                const LPERegex = e.value.match(/LPE-\d*/ig);
                if (LPERegex) {
                    LPECache.delete(LPERegex[0]);
                    console.log(`Revert ${LPERegex[0]} cause it has been exited in Sub Tasks List..`);
                }
            });
        });

        LPECache = Array.from(LPECache);
    });

    it('Catch LPS List..', function* () {
        LPSCache = new Map(yield LPECache.map((c)=> {
                return new Promise((resolve)=> {
                    fetch(properties.getURLWithAuth(`${subTaskInfo.host}/${c}`))
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

    it('Build Sub Task..', function*() {
        for (let item of LPSCache.entries) {
            const LPE = item[0];
            const LPS = item[1];
        }

        yield browser.click('//div[@class="command-bar"]/div/div/div/ul[3]/li[2]/div/a')
            .pause(3000)
            .click('//div[@class="aui-list"]/ul[5]/li[1]/a')
            .pause(3000)
            .setValue('#issuetype-field', 'Sub-Task')
            .pause(3000)
            .keys('\uE007')

            .setValue('#summary', 12345)

            .setValue('#components-textarea', 'Fix Pack Testing')
            .pause(3000)
            .keys('\uE007')

            .click('#create-issue-submit')
            .pause(3000);
    });

});


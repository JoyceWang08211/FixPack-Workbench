"use strict";

describe('Fix Pack Build Sub Tasks', function () {
    this.timeout(30000);

    before(function* () {
        yield browser.url('https://issues.liferay.com/browse/LRQA-19810');
        //WebElement we = helper.findElement(By.id("login-form-username"));
        //we.sendKeys("haoliang.wu");
        //we = helper.findElement(By.id("login-form-password"));
        //we.sendKeys("woaini0514");
        //we.submit();

        yield browser.setValue('#login-form-username', 'haoliang.wu');
        yield browser.setValue('#login-form-password', 'woaini0514');
        let title = yield browser.click('#login-form-submit').getTitle();

        return title.should.eventually.be.equal(`[LRQA-19810] Fix Pack Testing: portal-81-6210 - Liferay Issues`);
    });

    it('Start build sub tasks..', function () {

    });
});


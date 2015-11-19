"use strict";

let cheerio = require('cheerio');
let fetch = require('node-fetch');

let consoler = require('consoler');
let Table = require('cli-table');

let barUtil = require('../util/processBarUtil');
let properties = require('../util/propertiesUtil');

function* processConsoleOutput(testcases) {
    let results = [];
    consoler.loading(`Start Console Output process..`);

    for (let testcase of testcases) {
        consoler.loading(`Start sending request to ${testcase.id}.\n    Target URL: ${properties.getURLWithAuth(testcase.url)}`);
        let testcaseRES = yield fetch(properties.getURLWithAuth(testcase.url));
        consoler.success(`Have received response from ${testcase.id}.\n    Target URL: ${properties.getURLWithAuth(testcase.url)}`);

        consoler.loading(`Start catching Testcase HTML.`);
        let testcaseHTML = yield testcaseRES.text();
        consoler.success(`Have finished catching Testcases HTML.`);

        consoler.loading(`Start analyse Testcase HTML.`);

        let $ = cheerio.load(testcaseHTML);
        let tasks = $('#tasks');
        let cop_div = tasks.children().eq(3);
        let cop_a = cop_div.children().eq(1);
        let url_cop = cop_a.attr('href');

        consoler.loading(`Start catching console output..`);
        let copRES = yield fetch(properties.getURLWithAuth('https://test.liferay.com' + url_cop));
        let copHTML = yield copRES.text();

        $ = cheerio.load(copHTML);
        let pre = $('.console-output');
        let whole_content = pre.text();
        let cop = whole_content.match(/BUILD FAILED:.*/ig);

        if (cop) {
            testcase.cop = cop[0];
        }
        else {
            testcase.cop = "The COP should be double checked in this testcase.";
        }

        consoler.success(`Have finished catching console output..`);
        results.push(testcase);
        barUtil.bar.tick(1);
    }

    return results;
}


exports.run = processConsoleOutput;

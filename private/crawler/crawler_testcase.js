"use strict";

let cheerio = require('cheerio');
let fetch = require('node-fetch');

let consoler = require('consoler');
let Table = require('cli-table');

let barUtil = require('../util/processBarUtil');
let properties = require('../util/propertiesUtil');

function* processTestCase(builds) {
    let results = [];
    let info_table = new Table(
        {
            head: ['Component Name', 'Build Number', 'Total Cases', 'Failed Cases']
        }
    );

    consoler.loading(`Start Testcase process..`);

    for (let build of builds) {
        consoler.loading(`Start sending request to ${build.id}.\n    Target URL: ${properties.getURLWithAuth(build.url)}`);

        let testcaseRES = yield fetch(properties.getURLWithAuth(build.url));
        consoler.success(`Have received response from ${build.id}.\n    Target URL: ${properties.getURLWithAuth(build.url)}`);

        consoler.loading(`Start catching Testcases HTML.`);
        let testcaseHTML = yield testcaseRES.text();
        consoler.success(`Have finished catching Testcases HTML.`);

        consoler.loading(`Start analyse Testcases HTML.`);
        let $ = cheerio.load(testcaseHTML);
        let matrix = $('#matrix');
        let testcases = matrix.children('a');
        let result = [];

        for (let testcase of Array.from(testcases)) {
            let status_testcase = $(testcase).children().first().attr('alt');

            if (status_testcase == 'Success')
                continue;

            let url_testcase = $(testcase).attr('href');
            let name_testcase = $(testcase).text().trim();

            if (name_testcase) {
                let testcase_obj = {};
                testcase_obj.component = build.component;
                testcase_obj.build = build.id;
                testcase_obj.id = name_testcase;
                testcase_obj.url = build.url + url_testcase;
                testcase_obj.status = status_testcase;

                result.push(testcase_obj);
            }
        }

        results = results.concat(result);

        consoler.success(`Have finished analysed Testcases HTML`);

        info_table.push([
            build.component.match(/([^\[\]]+)/ig)[1] || 'Ignored',
            build.id,
            testcases.length,
            result.length]);

        barUtil.bar.tick(1);
    }


    let testcase_info = `Testcases Info:\n`;

    consoler.info(testcase_info + info_table.toString());

    barUtil.bar = barUtil.init(results.length, 'Console Output');

    return results;
}


exports.run = processTestCase;

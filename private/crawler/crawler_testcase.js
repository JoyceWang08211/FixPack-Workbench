"use strict";

let cheerio = require('cheerio');
let fetch = require('node-fetch');

let consoler = require('consoler');
let Table = require('cli-table');

let barUtil = require('../util/processBarUtil');
let properties = require('../util/propertiesUtil');

function processTestCase(build) {
    return fetch(properties.getURLWithAuth(build.url))
        .then((res)=> {
            return res.text();
        })
        .then((body)=> {
            let results = [];

            let $ = cheerio.load(body);
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
                    result.push({
                        id: name_testcase,
                        component: build.component,
                        build: build.id,
                        url: build.url + url_testcase,
                        status: status_testcase
                    });
                }
            }

            results = results.concat(result);

            barUtil.bar.tick(1);

            return results;
        });


}


exports.run = function (build) {
    return new Promise(
        (resolve)=> {
            resolve(processTestCase(build))
        }
    )
};

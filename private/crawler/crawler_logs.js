"use strict";

let cheerio = require('cheerio');
let fetch = require('node-fetch');

let consoler = require('consoler');
let Table = require('cli-table');

let barUtil = require('../util/processBarUtil');
let properties = require('../util/propertiesUtil');

function processConsoleOutput(testcase) {
    return fetch(properties.getURLWithAuth(testcase.url))
        .then((res)=> {
            return res.text();
        })
        .then((body)=> {
            let results = [];

            let $ = cheerio.load(body);
            let tasks = $('#tasks');
            let cop_div = tasks.children().eq(3);
            let cop_a = cop_div.children().eq(1);
            let url_cop = cop_a.attr('href');

            let copRES = yield fetch(properties.getURLWithAuth(properties.getCOPURL(url_cop)));
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

            results.push(testcase);
            barUtil.bar.tick(1);

            return results;
        })
}


exports.run = function (testcase) {
    return new Promise(
        (resolve)=> {
            resolve(processConsoleOutput(testcase));
        }
    );
};

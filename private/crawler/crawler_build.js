"use strict";

let cheerio = require('cheerio');
let fetch = require('node-fetch');

let barUtil = require('../util/processBarUtil');
let properties = require('../util/propertiesUtil');

let consoler = require('consoler');
let Table = require('cli-table');

function* processBuild(components) {
    let result = [];

    consoler.loading(`Start Build process..`);

    for (let component of components) {
        consoler.loading(`Start sending request to ${component.id}.\n    Target URL: ${properties.getURLWithAuth(component.url)}`);

        let buildRES = yield fetch(properties.getURLWithAuth(component.url));
        consoler.success(`Have received response from ${component.id}.\n    Target URL: ${properties.getURLWithAuth(component.url)}`);

        consoler.loading(`Start catching Builds HTML.`);
        let buildHTML = yield buildRES.text();
        consoler.success(`Have finished catching Builds HTML.`);

        consoler.loading(`Start analyse Builds HTML.`);
        let $ = cheerio.load(buildHTML);
        let buildHistory = $('#buildHistory');
        let builds = buildHistory.find('tr');

        for (let build of Array.from(builds)) {
            let td1 = $(build).children().eq(0);
            let build_number = td1.text().trim();

            if (build_number != properties.getBuildNumber())
                continue;

            let td2 = $(build).children().eq(1);
            let url_build = td2.children().first().attr('href');
            let status_build = td1.children().first().children().first().attr('tooltip');
            if (status_build) {
                result.push({
                    id: build_number,
                    component: component.id,
                    url: properties.getBuildURL(url_build)
                });
            }
        }
        consoler.success(`Have finished analysed Builds HTML`)
        barUtil.bar.tick(1);
    }

    return result;
}


exports.run = processBuild;

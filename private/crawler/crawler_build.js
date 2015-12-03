"use strict";

let cheerio = require('cheerio');
let fetch = require('node-fetch');

let barUtil = require('../util/processBarUtil');
let properties = require('../util/propertiesUtil');

function processBuild(component) {
    return fetch(properties.getURLWithAuth(component.url))
        .then((res)=> {
            return res.text();
        })
        .then((body)=> {
            let $ = cheerio.load(body);
            let buildHistory = $('#buildHistory');
            let builds = buildHistory.find('tr');
            let result;

            for (let build of Array.from(builds)) {
                let td1 = $(build).children().eq(0);
                let build_number = td1.text().trim();

                if (build_number != properties.getBuildNumber())
                    continue;

                let td2 = $(build).children().eq(1);
                let url_build = td2.children().first().attr('href');
                let status_build = td1.children().first().children().first().attr('tooltip');
                if (status_build) {
                    result = {
                        id: build_number,
                        component: component.id,
                        url: properties.getBuildURL(url_build)
                    };
                }
            }

            barUtil.bar.tick(1);

            return result;
        });
}

exports.run = function (component) {
    return new Promise(
        (resolve)=> {
            resolve(processBuild(component));
        }
    );
};

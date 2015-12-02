"use strict";

let cheerio = require('cheerio');
let fetch = require('node-fetch');

let consoler = require('consoler');
let Table = require('cli-table');

let barUtil = require('../util/processBarUtil');
let properties = require('../util/propertiesUtil');

function *processComponent(isBaseline) {
    let result = [];

    const url = isBaseline ? properties.getCrawlerInfo().url_baseline : properties.getCrawlerInfo().url;

    consoler.loading(`Start Component process..`)
    consoler.loading(`Start sending request to URL(${url})`);
    let componentRES = yield fetch(properties.getURLWithAuth(url));
    consoler.success(`Have received response from URL(${url})`);

    consoler.loading(`Start catching Components HTML of URL(${url})`);
    let componentHTML = yield componentRES.text();
    consoler.success(`Have finished catching Components HTML of URL(${url})`);

    consoler.loading(`Start analyse Component HTML of URL(${url})`);
    let $ = cheerio.load(componentHTML);
    let projectstatus = $('#projectstatus');
    let components = projectstatus.find('tr');

    for (let component of Array.from(components)) {
        let td3 = $(component).children().eq(2);
        let name_component = td3.children().first().text();
        let url_component = td3.children().first().attr('href');

        if (url_component) {
            result.push({
                id: name_component,
                url: properties.getComponentURL(url_component)
            });
        }
    }

    consoler.success(`Have finished analysing Component HTML of URL(${url}`);

    return result;
}

exports.run = processComponent;
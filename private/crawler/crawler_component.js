"use strict";

let cheerio = require('cheerio');
let fetch = require('node-fetch');

let consoler = require('consoler');
let Table = require('cli-table');

let barUtil = require('../util/processBarUtil');
let properties = require('../util/propertiesUtil');

function *processComponent() {
    let result = [];

    consoler.loading(`Start Component process..`)
    consoler.loading(`Start sending request to URL(${properties.getURL()})`);
    let componentRES = yield fetch(properties.getURLWithAuth());
    consoler.success(`Have received response from URL(${properties.getURL()})`);

    consoler.loading(`Start catching Components HTML of URL(${properties.getURL()})`);
    let componentHTML = yield componentRES.text();
    consoler.success(`Have finished catching Components HTML of URL(${properties.getURL()})`);

    consoler.loading(`Start analyse Component HTML of URL(${properties.getURL()})`);
    let $ = cheerio.load(componentHTML);
    let projectstatus = $('#projectstatus');
    let components = projectstatus.find('tr');

    for (let component of Array.from(components)) {
        let td3 = $(component).children().eq(2);
        let name_component = td3.children().first().text();
        let url_component = td3.children().first().attr('href');

        if (url_component) {
            let component_obj = {};
            component_obj.id = name_component;
            component_obj.url = properties.getURL() + url_component;
            component_obj.build = [];

            result.push(component_obj);
        }
    }

    consoler.success(`Have finished analysing Component HTML of URL(${properties.getURL()})`);

    let info_table = new Table();
    let info = {'ToTal Components Number': result.length};

    info_table.push(info);

    consoler.info(`Component Results Info:\n${info_table.toString()}`);

    barUtil.bar = barUtil.init(result.length, 'Build');

    return result;
}

exports.run = processComponent;
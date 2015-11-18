"use strict";

let fetch = require('node-fetch');
let co = require('co');
let cheerio = require('cheerio');

let properties = require('../util/propertiesUtil');

let result = {};


co(function* () {
    let componentURL = yield fetch(properties.getURLWithAuth())
    let componentHTML = yield componentURL.text();

    var $ = cheerio.load(componentHTML);
    var projectstatus = $('#projectstatus');
    var components = projectstatus.find('tr');

    for (let component of Array.from(components)) {
        var td3 = $(component).children().eq(2);
        var name_component = td3.children().first().text();
        var url_component = td3.children().first().attr('href');

        if (url_component) {
            var component_obj = new Object();
            component_obj.id = name_component;
            component_obj.url = properties.getURL() + url_component;
            component_obj.html = '';
            component_obj.build = [];

            var processBuild = new Promise(
                (resolve, reject)=> {
                    fetch(component_obj.url)
                        .then((res)=> {
                            return res.text();
                        })
                        .then((body)=> {
                            resolve(body)
                        })
                }
            )

            let test = yield processBuild;
            console.log(test);
        }
    }
}).catch((err)=> {
    console.error(err.stack);
});




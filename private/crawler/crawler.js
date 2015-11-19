"use strict";
//global lib
let fs = require('fs');

//crawler lib
let co = require('co');
let xlsx = require('node-xlsx');

//console format lib
let consoler = require('consoler');
let Table = require('cli-table');

//util lib
let properties = require('../util/propertiesUtil');

//crawler segments
let crawler_component = require('./crawler_component');
let crawler_build = require('./crawler_build');
let crawler_testcase = require('./crawler_testcase');
let crawler_logs = require('./crawler_logs');

co(function* () {
    consoler.info(`Crawler start working..`)

    let components = yield* crawler_component.run();
    let builds = yield* crawler_build.run(components);
    let testcases = yield* crawler_testcase.run(builds);
    let testcasesWithCops = yield* crawler_logs.run(testcases);

    var data = [];

    for (let item of testcasesWithCops) {
        let temp = [];
        temp.push(item.component.match(/([^\[\]]+)/ig)[1]);
        temp.push(item.id.split('=')[1]);
        temp.push(item.url);
        temp.push(item.cop);
        data.push(temp);
    }

    var buffer = xlsx.build([{name: properties.filename, data: data}]);

    yield new Promise(
        (resolve, reject)=> {
            fs.writeFile(__dirname + '/result/' + properties.getFileURL() + '.xlsx', buffer, (err)=> {
                if (err)
                    reject(new Error(err));
                else {
                    consoler.info(`The AA Result Lists File has been generated successfully..`);
                    consoler.info(`Crawler has closed..`)
                    resolve(1);
                }
            });
        }
    )

}).catch((err)=> {
    consoler.error(err.stack);
});








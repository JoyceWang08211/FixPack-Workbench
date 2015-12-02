'use strict';
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
let barUtil = require('../util/processBarUtil');

//crawler segments
let crawler_component = require('./crawler_component');
let crawler_build = require('./crawler_build');
let crawler_testcase = require('./crawler_testcase');
let crawler_logs = require('./crawler_logs');

let info_table = {};
let info = {};

exports.crawler = function* () {
    const isBaseline = properties.getCrawlerInfo().is_baseline;
    let baseline_suffix = isBaseline ? '-baseline' : '';

    consoler.info(`Crawler start working..`);

    //component process
    consoler.info(`Crawler start component process..`);
    let components = yield* crawler_component.run(isBaseline);
    info_table = new Table();
    info = {'ToTal Components Number': components.length};
    info_table.push(info);
    consoler.info(`Crawler has finished component process..`);
    consoler.info(`Component Results Info:\n${info_table.toString()}`);

    //build process
    consoler.info(`Crawler start build process..`);
    barUtil.bar = barUtil.init(components.length, 'Build');
    let builds = yield* crawler_build.run(components);
    info_table = new Table(
        {
            head: ['Component Name', 'Build Number']
        }
    );

    for (let build of builds) {
        let temp = build.component.match(/([^\[\]]+)/ig)[1] || 'Ignored';
        info_table.push([temp, build.id])
    }
    consoler.info(`Crawler has finished build process..`);
    consoler.info(`Builds Info:\n${info_table.toString()}`);

    //testcase process and console output process
    consoler.info(`Crawler start testcase and cop process..`);
    let testcases_process = [];

    for (let build of builds) {
        testcases_process.push(crawler_testcase.run(build));
    }

    barUtil.bar = barUtil.init(testcases_process.length, 'Testcase');
    let testcase_builds = yield testcases_process;
    info_table = new Table(
        {
            head: ['Component Name', 'Build Number', 'Total Cases', 'Failed Cases']
        }
    );

    let cops_process = [];
    for (let testcases of testcase_builds) {
        info_table.push([
            testcases.component.match(/([^\[\]]+)/ig)[1] || 'Ignored',
            testcases.build,
            testcases.total,
            testcases.length]);
        for (let testcase of testcases) {
            cops_process.push(crawler_logs.run(testcase));
        }
    }

    barUtil.bar = barUtil.init(cops_process.length, 'Console Output');

    let cops = yield cops_process;
    consoler.info(`Crawler has finished testcase and cop process..`);
    consoler.info(`Testcases Info:\n${info_table.toString()}`);

    consoler.info(`Crawler start generating AA Result Lists File..`);
    var data = [];

    for (let item of cops) {
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
            fs.writeFile(`${__dirname}/result/${properties.getFileName()}${baseline_suffix}.xlsx`, buffer, (err)=> {
                if (err)
                    reject(new Error(err));
                else {
                    consoler.info(`The AA Result Lists File has been generated successfully..`);
                    consoler.info(`Crawler has closed..`);
                    resolve(1);
                }
            });
        }
    )
};








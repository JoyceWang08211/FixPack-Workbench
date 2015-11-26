"use strict";

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const xlsx = require('node-xlsx');
const rd = require('rd');
const consoler = require('consoler');
const pd = require('pretty-data').pd;

let cache_Y, cache_N;

//relative mode
const temp_N_fileURL = path.resolve(__dirname, `./result/temp/N.json`);
const temp_Y_fileURL = path.resolve(__dirname, `./result/temp/Y.json`);
const temp_setting_fileURL = path.resolve(__dirname, `./result/temp/setting.json`);
let isRelative = true, relativeObj = [];

consoler.info('Start evaluate the priority report of fix-pack jobs..');
consoler.info(`The mode is ${isRelative ? 'Relative' : 'Absolute'}`);

if (isRelative) {
    let relatvieInfo;
    fse.ensureFileSync(temp_setting_fileURL);
    try {
        relatvieInfo = fse.readJsonSync(temp_setting_fileURL);
        consoler.info(`The relative target is generate from the report of ${relatvieInfo.list}`);
    }
    catch (e) {
        if (e.name == 'SyntaxError') {
            consoler.info(`The relative setting file is missing, so process Absolute mode..`);
            isRelative = false;
        }
        else {
            throw new Error(`Faile to start process due to ${e.name}:${e.message}`);
        }
    }
}

rd.eachFileFilterSync('../comparator/result', /\.xlsx$/,
    (f)=> {
        const fixPackName = path.basename(f).split('.')[0];
        consoler.loading(`Start evaluating ${fixPackName}..`);

        const fixPackPackageURL = path.resolve(__dirname, `./result/${fixPackName}`);
        const tempPackageURL = path.resolve(__dirname, `./result/temp`);

        fse.mkdirsSync(fixPackPackageURL);
        fse.mkdirsSync(tempPackageURL);

        const xlsx_fileURL = path.resolve(__dirname, `./result/${fixPackName}/result.xlsx`);
        const setting_fileURL = path.resolve(__dirname, `./result/${fixPackName}/setting.json`);
        const N_fileURL = path.resolve(__dirname, `./result/${fixPackName}/N.json`);
        const Y_fileURL = path.resolve(__dirname, `./result/${fixPackName}/Y.json`);

        let temp_Y, temp_N;

        if (fs.existsSync(temp_N_fileURL) && fs.existsSync(temp_Y_fileURL) && isRelative) {
            temp_Y = cache_Y || fse.readJsonSync(temp_Y_fileURL) || {result: {length: 0}};
            temp_N = cache_N || fse.readJsonSync(temp_N_fileURL) || {result: {length: 0}};
        }
        else {
            temp_Y = cache_Y || {result: {length: 0}};
            temp_N = cache_N || {result: {length: 0}};
        }

        let result_Y = {result: {length: 0}}, result_N = {result: {length: 0}};

        const excelObj = xlsx.parse(f)[0].data;

        let index_N = 0, index_Y = 0;
        for (let item of excelObj.entries()) {
            const index = item[0];
            const entry = item[1];

            const testcaseName = entry[1] == undefined ? 'default' : entry[1];

            if (entry[4] == 'N') {
                result_N[testcaseName] = index_N;

                if (temp_N.hasOwnProperty(testcaseName)) {
                    result_N.result[index_N++] =
                    {
                        index: index,
                        name: testcaseName,
                        priority: temp_N.result[temp_N[testcaseName]].priority + 1,
                        start: temp_N.result[temp_N[testcaseName]].start
                    };
                }
                else {
                    result_N.result[index_N++] =
                    {
                        index: index,
                        name: testcaseName,
                        priority: 1,
                        start: fixPackName
                    };
                }
            }
            else {
                result_Y[testcaseName] = index_Y;
                if (temp_Y.hasOwnProperty(testcaseName)) {
                    result_Y.result[index_Y++] =
                    {
                        index: index,
                        name: testcaseName,
                        priority: temp_Y.result[temp_Y[testcaseName]].priority + 1,
                        start: temp_Y.result[temp_Y[testcaseName]].start
                    };
                }
                else {
                    result_Y.result[index_Y++] =
                    {
                        index: index,
                        name: testcaseName,
                        priority: 1,
                        start: fixPackName
                    };
                }
            }
        }

        result_N.result.length = index_N;
        result_Y.result.length = index_Y;

        relativeObj.push(fixPackName);
        cache_Y = result_Y;
        cache_N = result_N;

        const N_sheet = {name: 'N', data: objToArray(result_N)};
        const Y_sheet = {name: 'Y', data: objToArray(result_Y)};

        consoler.loading(`Start generator ${fixPackName} report..`);
        fs.writeFileSync(xlsx_fileURL, xlsx.build([N_sheet, Y_sheet], []));
        fs.writeFileSync(setting_fileURL, pd.json({list: relativeObj}));
        fs.writeFileSync(N_fileURL, pd.json(result_N));
        fs.writeFileSync(Y_fileURL, pd.json(result_Y));
        consoler.loading(`The report url is ${path.resolve(__dirname, `./result/${fixPackName}`)}..`);

        fs.writeFileSync(temp_setting_fileURL, pd.json({list: relativeObj}));
        fs.writeFileSync(temp_N_fileURL, pd.json(result_N));
        fs.writeFileSync(temp_Y_fileURL, pd.json(result_Y));
    });

function objToArray(obj) {
    let temp = [];
    const result = Array.from(obj.result);

    for (let i in result) {
        if (result.hasOwnProperty(i)) {
            const entry = result[i];
            temp.push([entry.name, entry.priority, entry.start]);
        }
    }

    return temp;
}









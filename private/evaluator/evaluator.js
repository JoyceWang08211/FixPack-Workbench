'use strict';

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const xlsx = require('node-xlsx');
const rd = require('rd');
const consoler = require('consoler');
const pd = require('pretty-data').pd;

let cacheYes, cacheNot;

//relative mode
const tempNotFileURL = path.resolve(__dirname, `./result/temp/N.json`);
const tempYesFileURL = path.resolve(__dirname, `./result/temp/Y.json`);
const tempSettingFileURL = path.resolve(__dirname, `./result/temp/setting.json`);
let isRelative = true, relativeObj = [];

consoler.info('Start evaluate the priority report of fix-pack jobs..');
consoler.info(`The mode is ${isRelative ? 'Relative' : 'Absolute'}`);

if (isRelative) {
    let relatvieInfo;
    fse.ensureFileSync(tempSettingFileURL);
    try {
        relatvieInfo = fse.readJsonSync(tempSettingFileURL);
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

        const xlsxFileURL = path.resolve(__dirname, `./result/${fixPackName}/result.xlsx`);
        const settingFileURL = path.resolve(__dirname, `./result/${fixPackName}/setting.json`);
        const notFileURL = path.resolve(__dirname, `./result/${fixPackName}/N.json`);
        const yesFileURL = path.resolve(__dirname, `./result/${fixPackName}/Y.json`);

        let tempYes, tempNot;

        if (fs.existsSync(tempNotFileURL) && fs.existsSync(tempYesFileURL) && isRelative) {
            tempYes = cacheYes || fse.readJsonSync(tempYesFileURL) || {result: {length: 0}};
            tempNot = cacheNot || fse.readJsonSync(tempNotFileURL) || {result: {length: 0}};
        }
        else {
            tempYes = cacheYes || {result: {length: 0}};
            tempNot = cacheNot || {result: {length: 0}};
        }

        let resultYes = {result: {length: 0}}, resultNot = {result: {length: 0}};

        const excelObj = xlsx.parse(f)[0].data;

        let indexNot = 0, indexYes = 0;
        for (let item of excelObj.entries()) {
            const index = item[0];
            const entry = item[1];

            const testcaseName = entry[1] == undefined ? 'default' : entry[1];

            if (entry[4] == 'N') {
                resultNot[testcaseName] = indexNot;

                if (tempNot.hasOwnProperty(testcaseName)) {
                    resultNot.result[indexNot++] =
                    {
                        index: index,
                        name: testcaseName,
                        priority: tempNot.result[tempNot[testcaseName]].priority + 1,
                        start: tempNot.result[tempNot[testcaseName]].start
                    };
                }
                else {
                    resultNot.result[indexNot++] =
                    {
                        index: index,
                        name: testcaseName,
                        priority: 1,
                        start: fixPackName
                    };
                }
            }
            else {
                resultYes[testcaseName] = indexYes;
                if (tempYes.hasOwnProperty(testcaseName)) {
                    resultYes.result[indexYes++] =
                    {
                        index: index,
                        name: testcaseName,
                        priority: tempYes.result[tempYes[testcaseName]].priority + 1,
                        start: tempYes.result[tempYes[testcaseName]].start
                    };
                }
                else {
                    resultYes.result[indexYes++] =
                    {
                        index: index,
                        name: testcaseName,
                        priority: 1,
                        start: fixPackName
                    };
                }
            }
        }

        resultNot.result.length = indexNot;
        resultYes.result.length = indexYes;

        relativeObj.push(fixPackName);
        cacheYes = resultYes;
        cacheNot = resultNot;

        const notSheet = {name: 'N', data: objToArray(resultNot)};
        const yesSheet = {name: 'Y', data: objToArray(resultYes)};

        consoler.loading(`Start generator ${fixPackName} report..`);
        fs.writeFileSync(xlsxFileURL, xlsx.build([notSheet, yesSheet], []));
        fs.writeFileSync(settingFileURL, pd.json({list: relativeObj}));
        fs.writeFileSync(notFileURL, pd.json(resultNot));
        fs.writeFileSync(yesFileURL, pd.json(resultYes));
        consoler.loading(`The report url is ${path.resolve(__dirname, `./result/${fixPackName}`)}..`);

        fs.writeFileSync(tempSettingFileURL, pd.json({list: relativeObj}));
        fs.writeFileSync(tempNotFileURL, pd.json(resultNot));
        fs.writeFileSync(tempYesFileURL, pd.json(resultYes));
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









"use strict";
let fs = require('fs');
let fse = require('fs-extra');
let path = require('path');
let xlsx = require('node-xlsx');
let rd = require('rd');
let pd = require('pretty-data').pd;

let cache_Y, cache_N;

let isRelative = false;

rd.eachFileFilterSync('../comparator/result', /\.xlsx$/,
    (f)=> {
        let fixPackName = path.basename(f).split('.')[0];
        let fixPackPackageURL = path.resolve(__dirname, `./result/${fixPackName}`);
        let tempPackageURL = path.resolve(__dirname, `./result/temp`);

        fse.mkdirsSync(fixPackPackageURL);
        fse.mkdirsSync(tempPackageURL);

        let xlsx_fileURL = path.resolve(__dirname, `./result/${fixPackName}/result.xlsx`);
        let N_fileURL = path.resolve(__dirname, `./result/${fixPackName}/N.json`);
        let Y_fileURL = path.resolve(__dirname, `./result/${fixPackName}/Y.json`);
        let temp_N_fileURL = path.resolve(__dirname, `./result/temp/N.json`);
        let temp_Y_fileURL = path.resolve(__dirname, `./result/temp/Y.json`);

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

        let excelObj = xlsx.parse(f)[0].data;

        let index_N = 0, index_Y = 0;

        for (let item of excelObj.entries()) {
            let index = item[0];
            let entry = item[1];

            let testcaseName = entry[1] == undefined ? 'default' : entry[1];

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
                if (temp_Y.hasOwnProperty(testcaseName))
                    result_Y.result[index_Y++] =
                    {
                        index: index,
                        name: testcaseName,
                        priority: temp_Y.result[temp_Y[testcaseName]].priority + 1,
                        start: temp_Y.result[temp_Y[testcaseName]].start
                    };
                else
                    result_Y.result[index_Y++] =
                    {
                        index: index,
                        name: testcaseName,
                        priority: 1,
                        start: fixPackName
                    };
            }
        }

        result_N.result.length = index_N;
        result_Y.result.length = index_Y;

        cache_Y = result_Y;
        cache_N = result_N;

        let N_sheet = {name: 'N', data: objToArray(result_N)};
        let Y_sheet = {name: 'Y', data: objToArray(result_Y)};

        fs.writeFileSync(xlsx_fileURL, xlsx.build([N_sheet, Y_sheet], []));
        fs.writeFileSync(N_fileURL, pd.json(result_N));
        fs.writeFileSync(Y_fileURL, pd.json(result_Y));

        if (isRelative) {
            fs.writeFileSync(temp_N_fileURL, pd.json(result_N));
            fs.writeFileSync(temp_Y_fileURL, pd.json(result_Y));
        }
    });

function objToArray(obj) {
    let temp = [];
    let result = Array.from(obj.result);

    for (let i in result) {
        if (result.hasOwnProperty(i)) {
            let entry = result[i];
            temp.push([entry.name, entry.priority, entry.start]);
        }
    }

    return temp;
}









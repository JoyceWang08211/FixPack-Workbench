"use strict";
let fs = require('fs');
let path = require('path');
let xlsx = require('node-xlsx');
let rd = require('rd');
let pd = require('pretty-data').pd;

let cache_Y, cache_N;

rd.eachFileFilterSync('../comparator/result', /\.xlsx$/,
    (f)=> {
        let fixPackName = path.basename(f).split('.')[0];

        let fixPackPackageURL = path.resolve(__dirname, `./result/${fixPackName}`);
        if (!fs.existsSync(fixPackPackageURL))
            fs.mkdirSync(fixPackPackageURL);

        let xlsx_fileURL = path.resolve(__dirname, `./result/${fixPackName}/result.xlsx`);
        let N_fileURL = path.resolve(__dirname, `./result/${fixPackName}/N.json`);
        let Y_fileURL = path.resolve(__dirname, `./result/${fixPackName}/Y.json`);
        let temp_N_fileURL = path.resolve(__dirname, `./result/temp/N.json`);
        let temp_Y_fileURL = path.resolve(__dirname, `./result/temp/Y.json`);

        let temp_Y, temp_N;

        if (fs.existsSync(temp_N_fileURL) && fs.existsSync(temp_Y_fileURL)) {
            temp_Y = cache_Y || JSON.parse(fs.readFileSync(temp_N_fileURL, 'utf-8')) || {};
            temp_N = cache_N || JSON.parse(fs.readFileSync(temp_Y_fileURL, 'utf-8')) || {};
        }
        else {
            temp_Y = cache_Y || {};
            temp_N = cache_N || {};
        }

        let result_Y = {}, result_N = {};

        let excelObj = xlsx.parse(f)[0].data;

        for (let entry of excelObj) {
            let testcaseName = entry[1] == undefined ? 'default' : entry[1];

            if (entry[4] == 'N') {
                if (temp_N.hasOwnProperty(testcaseName))
                    result_N[testcaseName] = temp_N[testcaseName] + 1;
                else
                    result_N[testcaseName] = 1;
            }
            else {
                if (temp_Y.hasOwnProperty(testcaseName))
                    result_Y[testcaseName] = temp_Y[testcaseName] + 1;
                else
                    result_Y[testcaseName] = 1;
            }
        }

        cache_Y = result_Y;
        cache_N = result_N;

        let N_sheet = {name: 'N', data: objToArray(result_N)};
        let Y_sheet = {name: 'Y', data: objToArray(result_Y)};

        fs.writeFileSync(xlsx_fileURL, xlsx.build([N_sheet, Y_sheet], []));
        fs.writeFileSync(N_fileURL, pd.json(result_N));
        fs.writeFileSync(Y_fileURL, pd.json(result_Y));
        fs.writeFileSync(temp_N_fileURL, pd.json(result_N));
        fs.writeFileSync(temp_Y_fileURL, pd.json(result_Y));
    });

function objToArray(obj) {
    let temp = [];

    for (let i in obj) {
        if (obj.hasOwnProperty(i))
            temp.push([i, obj[i]]);
    }

    return temp;
}









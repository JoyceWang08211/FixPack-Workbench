"use strict";

let fs = require('fs');
let xlsx = require('node-xlsx');

let properties = require('../util/propertiesUtil');

let patch = {};
let baseline = {};

exports.compare = function () {
    try {
        patch = xlsx.parse(__dirname + '/result/' + properties.getFileName() + '.xlsx')[0].data;
        baseline = xlsx.parse(__dirname + '/result/' + properties.getFileName() + '-baseline.xlsx')[0].data;

        let base = patch[0][0];
        for (let e in patch) {
            if (e != 0) {
                if (patch[e - 1][0] == patch[e][0]) {
                    patch[e][0] = '';
                }
                else {
                    if (patch[e][0] == base) {
                        patch[e][0] = '';
                    }
                    else {
                        base = patch[e][0];
                    }
                }
            }

            let count = 0;

            for (let e1 in baseline) {

                let c1 = patch[e];
                let c2 = baseline[e1];
                let c1_testcase = c1[1] != null ? c1[1].split('#')[1] : '#';
                let c2_testcase = c2[1] != null ? 'test' + c2[1].split('#')[1] : '#';
                let c1_cop = c1[3];
                let c2_cop = c2[3];

                if (c1_testcase != c2_testcase) {
                    count++;
                    if (count == baseline.length) {
                        patch[e].push('N');
                        break;
                    }
                    else {
                        continue;
                    }
                }
                else {
                    if (c1_cop == c2_cop) {
                        patch[e].push('Y');
                        break;
                    }
                    else {
                        patch[e].push('N');
                        break;
                    }
                }

            }
        }

        let data_json = {name: 'result', data: patch};
        let buffer = xlsx.build([data_json]);

        fs.writeFileSync(__dirname + '/result/result.xlsx', buffer);

        exports.excel_json = data_json;
        exports.baseline = baseline;
        exports.patch = patch;

        return true;
    } catch (err) {
        console.log(err);
    }
};
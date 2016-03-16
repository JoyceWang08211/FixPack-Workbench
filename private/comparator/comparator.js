'use strict';

const fs = require('fs');
const xlsx = require('node-xlsx');
const appRoot = require('app-root-path');

const properties = require('../util/propertiesUtil');
const tplUtil = require('../util/tplUtil');

let patch = {};
let baseline = {};

exports.compare = function () {
  patch = xlsx.parse(appRoot + '/private/crawler/result/' + properties.getFileName() + '.xlsx')[0].data;
  baseline = xlsx.parse(appRoot + '/private/crawler/result/' + properties.getFileName() + '-baseline.xlsx')[0].data;

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
      let c1_testcase = c1[1] != null ? c1[1] : '#';
      let c2_testcase = c2[1] != null ? c2[1] : '#';
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

  fs.writeFile(__dirname + `/result/${properties.getFileName()}.xlsx`, buffer, (err)=> {
    if (err)
      console.error(err.stack);
    else
      console.log('finished !!')
  });

  return resultFilter(patch);
};

function resultFilter(oldData) {
  //['Component', 'Test Name', 'Link', 'Baseline', 'Local Drive Results', 'Fixpack Approved', 'Tester1', 'Tester2', 'Console Output', 'Error Type', 'Tester1 Comment', 'Tester2 Comment'],
  const fixpackInfo = properties.getFixPackInfo();

  let tpl = tplUtil.aa_fixpack_sheet;

  //fixpack component
  tpl[0][1] = fixpackInfo.name;
  //Task Ticket
  tpl[1][1] = `https://issues.liferay.com/browse/${fixpackInfo.ticket}`;
  //Portal Version
  tpl[2][1] = '6.2.10 EE SP14';

  oldData.forEach((e, i)=> {
    tpl = tpl.concat([[e[0], e[1], e[2], e[4], '', `=if(D${i + 9}="Y","Pass", "")`, '', '', e[3], '', '', '']])
  });

  return tpl
}
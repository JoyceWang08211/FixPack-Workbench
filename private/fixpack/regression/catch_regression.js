'use strict';

const appRoot = require('app-root-path');
const properties = require(appRoot + '/private/util/propertiesUtil.js');
const fetch = require('node-fetch');
const xlsx = require('node-xlsx');
const fs = require('fs');
const fse = require('fs-extra');
const cheerio = require('cheerio');

const regressionInfo = properties.getRegressionInfo();
const fixPackInfo = properties.getFixPackInfo();

fetch(properties.getURLWithAuth(`${regressionInfo.host}/${fixPackInfo.ticket}`))
    .then((res)=> {
        return res.text();
    })
    .then((body)=> {
        return cheerio.load(body);
    })
    .then(($)=> {
        var excel = {
            name: 'result',
            data: []
        };

        $('.user-content-block').find('a').each(function () {
            var text = $(this).text().split();
            excel.data.push(text);
        });

        console.log(excel);

        fse.mkdirs('./result');

        fs.writeFile(`./result/result-${fixPackInfo.ticket}.xlsx`, xlsx.build([excel]), function () {
            console.log('Result has been generated.');
        });
    });

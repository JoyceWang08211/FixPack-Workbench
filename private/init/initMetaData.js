"use strict";
var xmlParser = require('xml2json');
var path = require('path');
var pd = require('pretty-data').pd;
var fs = require('fs');
var po = require('../poshi/poshiModel');

var options = {
    object: true,
    reversible: true,
    coerce: false,
    sanitize: true,
    trim: true,
    arrayNotation: false
}

var optionsRaw = {
    object: false,
    reversible: false,
    coerce: false,
    sanitize: true,
    trim: true,
    arrayNotation: false
}

po.init()
    .then(()=> {
        initSearchMenuJSON();
        initPageObjectJSON();
    })
    .then(()=> {
        console.log('Initiate MetaData Successfully.')
    });


let initSearchMenuJSON = function () {
    let menuList = {
        functionMenuList: []
    };

    for (let name of po.functions) {
        menuList.functionMenuList.push({
            value: name,
            label: name.split('.')[0]
        });
    }

    fs.writeFile(path.resolve(__dirname, '../../public/data/common/functionMenuLists.json'), pd.json(menuList), function (err) {
        if (err) {
            console.log(err)
        }
    })
};

let initPageObjectJSON = function () {
    for (let item of po.functionsURL.entries()) {
        let functionName = item[0].split('.')[0];
        let functionURL = item[1];

        fs.readFile(functionURL, 'utf-8', function (err, data) {
            var json = xmlParser.toJson(data, options); //returns a string containing the JSON structure by default
            fs.writeFile(path.resolve(__dirname, '../../public/data/function/' + functionName + '.json'), pd.json(json), function (err) {
                if (err) {
                    console.log(err)
                }
            })
        });
    }
};



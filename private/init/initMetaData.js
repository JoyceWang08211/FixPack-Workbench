"use strict";
var xmlParser = require('xml2json');
var path = require('path');
var pd = require('pretty-data').pd;
var fs = require('fs');
var po = require('../model/poshiModel');

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

po.init
    .then(()=> {
        return initSearchMenuJSON();
    })
    .then(()=> {
        return initPageObjectJSON();
    })
    .then(()=> {
        console.log('Initiate MetaData Successfully.')
    });


let initSearchMenuJSON = function () {
    let menuList = {
        functionMenuList: [],
        macroMenuList: [],
        testcaseMenuList: []
    };

    for (let name of po.functions) {
        menuList.functionMenuList.push({
            value: name,
            label: name.split('.')[0]
        });
    }

    for (let name of po.macros) {
        menuList.macroMenuList.push({
            value: name,
            label: name.split('.')[0]
        });
    }

    for (let name of po.testcases) {
        menuList.testcaseMenuList.push({
            value: name,
            label: name.split('.')[0]
        });
    }

    return new Promise(
        (resolve, reject)=> {
            fs.writeFile(path.resolve(__dirname, '../../public/data/common/MenuLists.json'), pd.json(menuList), function (err) {
                if (err) {
                    reject(new Error(err));
                }
                else {
                    resolve(menuList);
                }
            });
        }
    )
};

let initPageObjectJSON = function () {
    let p1 = Array.from(po.functionsURL.entries()).map((item)=> {
        let functionName = item[0].split('.')[0];
        let functionURL = item[1];

        return new Promise(
            (resolve, reject)=> {
                fs.readFile(functionURL, 'utf-8', function (err, data) {
                    var json = xmlParser.toJson(data, options); //returns a string containing the JSON structure by default
                    fs.writeFile(path.resolve(__dirname, '../../public/data/function/' + functionName + '.json'), pd.json(json), function (err) {
                        if (err) {
                            reject(new Error(err));
                        }
                        else {
                            resolve(functionName);
                        }
                    })
                });
            }
        )
    });
    let p2 = Array.from(po.macrosURL.entries()).map((item)=> {
        let macroName = item[0].split('.')[0];
        let macroURL = item[1];

        return new Promise(
            (resolve, reject)=> {
                fs.readFile(macroURL, 'utf-8', function (err, data) {
                    var json = xmlParser.toJson(data, options); //returns a string containing the JSON structure by default
                    fs.writeFile(path.resolve(__dirname, '../../public/data/macro/' + macroName + '.json'), pd.json(json), function (err) {
                        if (err) {
                            reject(new Error(err));
                        }
                        else {
                            resolve(macroName);
                        }
                    })
                });
            });
    });

    let p3 = Array.from(po.testcasesURL.entries()).map((item)=> {
        let testcaseName = item[0].split('.')[0];
        let testcaseURL = item[1];

        return new Promise(
            (resolve, reject)=> {

                fs.readFile(testcaseURL, 'utf-8', function (err, data) {
                    var json = xmlParser.toJson(data, options); //returns a string containing the JSON structure by default
                    fs.writeFile(path.resolve(__dirname, '../../public/data/testcase/' + testcaseName + '.json'), pd.json(json), function (err) {
                        if (err) {
                            reject(new Error(err));
                        }
                        else {
                            resolve(testcaseName);
                        }
                    })
                });
            });
    });

    return Promise.all([].concat(p1, p2, p3));
};



"use strict";

let rd = require('rd');
let path = require('path');

let properties = require('../util/propertiesUtil');

let liferay_home = properties.getProperty('project_home');
let portalweb_home = properties.getProperty('portalweb_home');
let poshi_home = liferay_home + portalweb_home;

//function
let initFunctions = new Promise(
    (resolve, reject)=> {
        rd.readFileFilter(poshi_home, /\.function$/,
            (err, list)=> {
                if (err) throw reject(new Error('Failed to init Functions due to error: %s', err));
                else {
                    let functionsName = [];
                    let functionsURL = new Map();

                    list.forEach((c, i)=> {
                        functionsName.push(path.basename(c));
                        functionsURL.set(path.basename(c), c);
                    });

                    exports.functions = functionsName;
                    exports.functionsURL = functionsURL;

                    resolve(list);
                }
            });
    });

//macro
let initMacros = new Promise(
    (resolve, reject)=> {
        rd.readFileFilter(poshi_home, /\.macro$/,
            (err, list)=> {
                if (err) throw reject(new Error('Failed to init macros due to error: %s', err));
                else {
                    let macrosName = [];
                    let macrosURL = new Map();

                    list.forEach((c, i)=> {
                        macrosName.push(path.basename(c));
                        macrosURL.set(path.basename(c), c);
                    });

                    exports.macros = macrosName;
                    exports.macrosURL = macrosURL;

                    resolve(list);
                }
            });
    });

//testcase
let initTestcases = new Promise(
    (resolve, reject)=> {
        rd.readFileFilter(poshi_home, /\.testcase$/,
            (err, list)=> {
                if (err) throw reject(new Error('Failed to init testcases due to error: %s', err));
                else {
                    let testcasesName = [];
                    let testcasesURL = new Map();

                    list.forEach((c, i)=> {
                        testcasesName.push(path.basename(c));
                        testcasesURL.set(path.basename(c), c);
                    });

                    exports.testcases = testcasesName;
                    exports.testcasesURL = testcasesURL;

                    resolve(list);
                }
            });
    });

//path
let initPaths = new Promise(
    (resolve, reject)=> {
        rd.readFileFilter(poshi_home, /\.path$/,
            (err, list)=> {
                if (err) throw reject(new Error('Failed to init paths due to error: %s', err));
                else {
                    let pathsName = [];
                    let pathsURL = new Map();

                    list.forEach((c, i)=> {
                        pathsName.push(path.basename(c));
                        pathsURL.set(path.basename(c), c);
                    });

                    exports.paths = pathsName;
                    exports.pathsURL = pathsURL;

                    resolve(list);
                }
            });
    });

exports.init = function () {
    return Promise.all([initFunctions, initMacros, initTestcases, initPaths]);
};



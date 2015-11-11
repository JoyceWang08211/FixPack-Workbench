"use strict";

let fs = require('fs');

let properties = JSON.parse(fs.readFileSync('../properties.json', 'utf-8'));

exports.getProperty = function (propertyName) {
    return properties[propertyName];
};
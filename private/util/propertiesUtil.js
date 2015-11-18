"use strict";

let fs = require('fs');

class Properties {
    constructor(properties) {
        for (let item in properties) {
            if (properties.hasOwnProperty(item))
                this[item] = properties[item];
        }
    }

    getURL() {
        let crawler_info = this.crawler_info;

        return crawler_info.url;
    }

    getURLWithAuth() {
        let crawler_info = this.crawler_info;

        return `${crawler_info.url.split('//')[0]}//${crawler_info.username}:${crawler_info.password}@${crawler_info.url.split('//')[1]}`
    }
}

let properties = JSON.parse(fs.readFileSync('../properties.json', 'utf-8'));

module.exports = new Properties(properties);
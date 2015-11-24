"use strict";

let path = require('path');
let fs = require('fs');

class Properties {
    constructor(properties) {
        for (let item in properties) {
            if (properties.hasOwnProperty(item))
                this[item] = properties[item];
        }
    }

    getFileName() {
        return this.crawler_info.filename;
    }

    getComponentURL(url) {
        return this.getURL() + url
    }

    getBuildURL(url) {
        return this.jenkins_info.host + url;
    }

    getTestCaseURL(buildUrl, url) {
        return this.getBuildURL(buildUrl) + url;
    }

    getCOPURL(url) {
        return this.jenkins_info.host + url;
    }

    getBuildNumber() {
        return this.crawler_info.build;
    }

    getURL() {
        return this.crawler_info.url;
    }

    getURLWithAuth(url) {
        if (!url)
            return `${this.crawler_info.url.split('//')[0]}//${this.crawler_info.username}:${this.crawler_info.password}@${this.crawler_info.url.split('//')[1]}`;
        else
            return `${url.split('//')[0]}//${this.crawler_info.username}:${this.crawler_info.password}@${url.split('//')[1]}`
    }
}

let properties = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../properties.json'), 'utf-8'));

module.exports = new Properties(properties);
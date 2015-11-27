'use strict';

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
            return `${this.crawler_info.url.split('//')[0]}//${this.user_info.username}:${this.user_info.password}@${this.crawler_info.url.split('//')[1]}`;
        else
            return `${url.split('//')[0]}//${this.user_info.username}:${this.user_info.password}@${url.split('//')[1]}`
    }

    //user
    getUserInfo() {
        return this.user_info;
    }

    //jenkins
    getJenkinsInfo() {
        return this.jenkins_info;
    }

    //crawler
    getCrawlerInfo() {
        return this.crawler_info;
    }

    //sub task
    getSubTaskInfo() {
        return this.sub_task_info;
    }

    //regression
    getRegressionInfo() {
        return this.regression_info;
    }
}

let properties = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../properties.json'), 'utf-8'));

module.exports = new Properties(properties);
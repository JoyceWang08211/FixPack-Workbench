'use strict';

let path = require('path');
let fs = require('fs');
const fse = require('fs-extra');

class Properties {
    constructor(path) {
        this.path = path;
        this.rawObj = fse.readJsonSync(path);
        for (let item in this.rawObj) {
            this[item] = this.rawObj[item];
        }
    }

    setProperties(obj) {
        fse.writeJsonSync(this.path, obj);
    }

    getFileName() {
        return this.fixpack_info.name + '-build' + this.fixpack_info.build;
    }

    getComponentURL(url) {
        return this.getURL() + url;
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
            return `${url.split('//')[0]}//${this.user_info.username}:${this.user_info.password}@${url.split('//')[1]}`;
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

    //fixpack info
    getFixPackInfo() {
        return this.fixpack_info;
    }

    getRawObj() {
        return this.rawObj;
    }

    getRawObjString() {
        return JSON.stringify(this.rawObj, 4);
    }
}

module.exports = new Properties(path.resolve(__dirname, '../properties.json'));
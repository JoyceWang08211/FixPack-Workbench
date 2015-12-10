"use strict";
let ProgressBar = require('progress');

class Bar {
    constructor() {
        this.cliBar = {};
        this.crawlerBuildBar = {current: 0, total: 1};
        this.crawlerTestcaseBar = {current: 0, total: 1};
        this.crawlerCopBar = {current: 0, total: 1};
    }

    getCliBar() {
        return this.cliBar;
    }

    setCliBar(bar) {
        this.cliBar = bar;
    }

    getCrawlerBuildBar() {
        return this.crawlerBuildBar;
    }

    setCrawlerBuildBar(length) {
        this.crawlerBuildBar = {current: 0, total: length};
    }

    getCrawlerBuildBarProcess() {
        return (this.crawlerBuildBar.current / this.crawlerBuildBar.total).toFixed(2);
    }

    getCrawlerTestcaseBar() {
        return this.crawlerTestcaseBar;
    }

    setCrawlerTestcaseBar(length) {
        this.crawlerTestcaseBar = {current: 0, total: length};
    }

    getCrawlerTestcaseBarProcess() {
        return (this.crawlerTestcaseBar.current / this.crawlerTestcaseBar.total).toFixed(2);
    }

    getCrawlerCopBar() {
        return this.crawlerCopBar;
    }

    setCrawlerCopBar(length) {
        this.crawlerCopBar = {current: 0, total: length};
    }

    getCrawlerCopBarProcess() {
        return (this.crawlerCopBar.current / this.crawlerCopBar.total).toFixed(2);
    }

    tickCrawlerBar(bar, step) {
        bar.current += step;
    }

    initCliBar(length, title) {
        return new ProgressBar('  Catching ' + title + ' Data [:bar] :percent :etas', {
            complete: '=',
            incomplete: ' ',
            width: 20,
            total: length || this.length
        });
    }

    initCrawlerBar() {
        this.crawlerBuildBar = {current: 0, total: 1};
        this.crawlerTestcaseBar = {current: 0, total: 1};
        this.crawlerCopBar = {current: 0, total: 1};
    }
}

module.exports = new Bar();
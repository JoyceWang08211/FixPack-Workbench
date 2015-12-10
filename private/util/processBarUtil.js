"use strict";
let ProgressBar = require('progress');

class Bar {
    constructor() {
        this.cliBar = {};
        this.crawlerBuildBar = {};
        this.crawlerTestcaseBar = {};
        this.crawlerCopBar = {};
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

    setCrawlerBuildBar(bar) {
        this.crawlerBuildBar = bar;
    }

    getCrawlerTestcaseBar() {
        return this.crawlerTestcaseBar;
    }

    setCrawlerTestcaseBar(bar) {
        this.crawlerTestcaseBar = bar;
    }

    getCrawlerCopBar() {
        return this.crawlerCopBar;
    }

    setCrawlerCopBar(bar) {
        this.crawlerCopBar = bar;
    }

    initCliBar(length, title) {
        return new ProgressBar('  Catching ' + title + ' Data [:bar] :percent :etas', {
            complete: '=',
            incomplete: ' ',
            width: 20,
            total: length || this.length
        });
    }
}

module.exports = new Bar();
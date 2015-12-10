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

    init(length, title) {
        return new ProgressBar('  Catching ' + title + ' Data [:bar] :percent :etas', {
            complete: '=',
            incomplete: ' ',
            width: 20,
            total: length || this.length
        });
    }
}

exports.bar = {};
module.exports = new Bar();
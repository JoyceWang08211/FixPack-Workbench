"use strict";
let ProgressBar = require('progress');

class Bar {
    constructor(length) {
        this.length = length;
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
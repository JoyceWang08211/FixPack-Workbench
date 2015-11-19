"use strict";

let fs = require('fs');

class Logs {
    constructor(path) {
        this.path = path;
    }

    createLogsFile() {
        fs.writeFileSync(this.path, '##the log file');
    }

    appendFile(data) {
        fs.appendFileSync(this.path, data);
    }

}

module.exports = new Logs('../crawler/logs/log.txt');

let Execute = require('./Execute');
let If = require('./If');

let Command = {
    "type": "array",
    "title": "Command",
    "format": "tabs",
    "items": {
        "title": "Command",
        "headerTemplate": "{{self.name}}",
        oneOf: [].concat(Execute.ExecuteSelenium, If.IfRoot)
    }
};

exports.FunctionCommand = Command;
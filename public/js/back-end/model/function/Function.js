let Command = require('./Command');

let Function = {
    type: "object",
    title: "Function",
    headerTemplate: "{{self.name}}",

    properties: {
        name: {
            type: "string"
        },

        default: {
            type: "string"
        },

        command: Command.FunctionCommand
    }
};

exports.FunctionRoot = Function;
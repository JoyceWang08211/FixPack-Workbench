const Var = {
    type: 'array',
    title: 'var',
    format: 'tabs',

    items: {
        type: 'object',
        title: 'var',
        properties: {
            name: {
                type: 'string'
            },

            value: {
                type: 'string'
            }
        }
    }
}

const InvokeFunctionWithValue1 = {
    type: 'object',
    title: 'InvokeFunction',

    properties: {
        function: {
            type: 'string'
        },

        locator1: {
            type: 'string'
        },

        value1: {
            type: 'string'
        }
    }
}

const InvokeFunctionWithoutValue1 = {
    type: 'object',
    title: 'InvokeFunction',

    properties: {
        function: {
            type: 'string'
        },

        locator1: {
            type: 'string'
        }
    }
}

const InvokeMacro_macro_var = {
    type: 'object',
    title: 'InvokeMacro',

    properties: {
        macro: {
            type: 'string'
        },

        var: {
            type: 'array',
            title: 'var',
            format: 'tabs',

            items: {
                type: 'object',
                title: 'var',
                properties: {
                    name: {
                        type: 'string'
                    },

                    value: {
                        type: 'string'
                    }
                }
            }
        }
    }
};
const InvokeMacro_macro = {
    type: 'object',
    title: 'InvokeMacro',

    properties: {
        macro: {
            type: 'string'
        }
    }
};

const BasicMacro = {
    type: 'object',
    title: 'BasicMacro',

    properties: {
        name: {
            type: 'string'
        },

        var: {
            type: 'array',
            title: 'var',
            format: 'tabs',

            items: {
                type: 'object',
                title: 'var',
                properties: {
                    name: {
                        type: 'string'
                    },

                    value: {
                        type: 'string'
                    }
                }
            }
        },

        execute: {
            type: 'array',
            title: 'execute',
            format: 'tabs',

            items: {
                title: 'execute',
                oneOf: [InvokeMacro_macro, InvokeMacro_macro_var, InvokeFunctionWithValue1, InvokeFunctionWithoutValue1]
            }
        }
    }
}

const MacroExecute = {
    "type": "array",
    "title": "MacroExecute",
    "format": "tabs",
    "items": {
        "title": "Command",
        "headerTemplate": "{{self.name}}",
        oneOf: [BasicMacro]
    }
};

const MacroBody = {
    type: "object",
    title: "Macro",

    properties: {
        name: {
            type: "string"
        },
        execute: MacroExecute
    }
};

exports.MacroRoot = MacroBody;


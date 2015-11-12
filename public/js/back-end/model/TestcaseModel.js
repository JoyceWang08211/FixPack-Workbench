const InvokeFunctionMultiple = {
    "title": "Execute",
    "type": "object",
    "properties": {
        "function": {
            "type": "array",
            "items": {
                "type": "string",
                "title": "Function"
            }
        }
    }
}

const InvokeFunctionSingle = {
    "title": "Execute",
    "type": "object",
    "properties": {
        "function": {
            "type": "string"
        }
    }
}

const Execute = {
    "title": "Execute",
    "type": "object",
    "properties": {
        "name": {
            "type": "string"
        },
        "execute": {
            "type": "array",
            "title": "Selenium",
            "items": {
                "type": "object",
                "title": "Selenium",
                "headerTemplate": "{{self.selenium}}",

                "properties": {
                    "selenium": {
                        "type": "string",
                        "enum": [
                            'waitForVisible',
                            'mouseOver',
                            'addSelection',
                            'assertJavaScriptErrors',
                            'assertLiferayErrors'
                        ]
                    }
                }
            }
        }
    }
}

const If = {
    "title": "Advance Execute(If..Then..Else)",
    "type": "object",
    "properties": {
        "name": {
            "type": "string"
        },
        "if": {
            "type": "object",
            "title": "If",

            "properties": {
                "contains": {
                    "type": "object",
                    "properties": {
                        "string": {
                            "type": "string"
                        },

                        "substring": {
                            "type": "string"
                        }
                    }
                },
                "then": {
                    "type": "object",
                    "title": "Then",
                    "properties": {
                        "execute": InvokeFunctionSingle
                    }
                },
                "else": {
                    "type": "object",
                    "title": "Else",
                    "properties": {
                        "execute": InvokeFunctionSingle
                    }
                }
            }
        }

    }
};

const Command = {
    "type": "array",
    "title": "Command",
    "format": "tabs",
    "items": {
        "title": "Command",
        "headerTemplate": "{{self.name}}",
        oneOf: [Execute, If]
    }
};

const Testcase = {
    type: "object",
    title: "Testcase",
    headerTemplate: "{{self.name}}",

    properties: {
        name: {
            type: "string"
        },

        default: {
            type: "string"
        },

        command: Command
    }
};

exports.TestcaseRoot = Testcase;


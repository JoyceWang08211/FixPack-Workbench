/*
 the if state in function
 * c --> contains
 * t --> then
 * eif --> elseIf
 * e --> else*/
let ExecuteInvoke = require('./ExecuteInvoke');

let If_c_t_e = {
    "title": "If..Then..Else",
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
                        "execute": ExecuteInvoke.InvokeSingleFunction
                    }
                },
                "else": {
                    "type": "object",
                    "title": "Else",
                    "properties": {
                        "execute": ExecuteInvoke.InvokeSingleFunction
                    }
                }
            }
        }

    }
};

exports.IfRoot = [If_c_t_e];

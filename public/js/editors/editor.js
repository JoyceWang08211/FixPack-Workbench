let React = require('react');
let $ = require('jquery');

//JSON Editor plugin
var JSONEditor = require('jsoneditor');

JSONEditor.defaults.options.theme = 'bootstrap3';

let starting_value = {
    "definition": {
        "default": "copy",
        "command": [
            {
                "name": "ckEditorCopy",
                "execute": [
                    {
                        "argument1": "//a[contains(@class,'cke_button__unlink') and contains(@class,'cke_button_disabled')]",
                        "selenium": "waitForVisible"
                    },
                    {
                        "argument1": "1000",
                        "selenium": "pause"
                    },
                    {
                        "selenium": "selectFrame"
                    },
                    {
                        "argument1": "//html/body",
                        "selenium": "waitForVisible"
                    },
                    {
                        "argument1": "//html/body",
                        "selenium": "mouseOver"
                    },
                    {
                        "argument1": "//html/body",
                        "selenium": "copyText"
                    },
                    {
                        "argument1": "relative=parent",
                        "selenium": "selectFrame"
                    },
                    {
                        "selenium": "assertJavaScriptErrors"
                    },
                    {
                        "selenium": "assertLiferayErrors"
                    }
                ]
            },
            {
                "name": "copy",
                "if": {
                    "contains": {
                        "string": "${locator1}",
                        "substring": "/input"
                    },
                    "then": {
                        "execute": {
                            "function": "Copy#valueCopy"
                        }
                    },
                    "else": {
                        "execute": {
                            "function": "Copy#textCopy"
                        }
                    }
                }
            },
            {
                "name": "textCopy",
                "execute": [
                    {
                        "selenium": "waitForVisible"
                    },
                    {
                        "selenium": "mouseOver"
                    },
                    {
                        "selenium": "copyText"
                    },
                    {
                        "selenium": "assertJavaScriptErrors"
                    },
                    {
                        "selenium": "assertLiferayErrors"
                    }
                ]
            },
            {
                "name": "valueCopy",
                "execute": [
                    {
                        "selenium": "waitForVisible"
                    },
                    {
                        "selenium": "mouseOver"
                    },
                    {
                        "selenium": "copyValue"
                    },
                    {
                        "selenium": "assertJavaScriptErrors"
                    },
                    {
                        "selenium": "assertLiferayErrors"
                    }
                ]
            }
        ]
    }
}
//"items": {
//    "name": {
//        "type": "string"
//    },
//    "selenium": {
//        "type": "array",
//            "items": {
//"type": "object",
//"title": "Command",
//"headerTemplate": "{{self.name}}",
//
//"properties": {
//    "name": {
//        "type": "string"
//    },
//    "execute": {
//
//    }
//}
//}

//    }
//}
let sample = {
    "type": "object",
    "title": "Function",
    "headerTemplate": "{{self.name}}",

    "properties": {
        "name": {
            "type": "string"
        },

        "command": {
            "type": "array",
            "title": "Command",
            "format": "tabs",
            "items": {
                "type": "object",
                "title": "Command",
                "headerTemplate": "{{self.name}}",

                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "execute": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "title": "Selenium",
                            "headerTemplate": "{{self.selenium}}",

                            "properties": {
                                "selenium": {
                                    "type": "string",
                                    "enum": [
                                        'selenium 1',
                                        'selenium 2',
                                        'selenium 3',
                                        'selenium 4',
                                        'selenium 5'
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};


let EditorBox = React.createClass({
    editor: {},

    handleSave: function () {
        var payload = {
            page_obj: this.editor.getValue()
        };

        $.ajax({
            type: "POST",
            url: "/editors/save",
            data: payload,
            dataType: "json",
            success: (result)=> {
                console.log(result)
            }
        });
    },

    render: function () {
        return (
            <div>
                <div className="btn-group" role="group" aria-label="save">
                    <button type="button" className="btn btn-default" onClick={this.handleSave}>Save</button>
                </div>
                <div id='editor_json_tab'></div>
            </div>
        )
    },

    componentDidMount: function () {
        this.editor = new JSONEditor(document.getElementById('editor_json_tab'), {
            schema: sample,
            disable_properties: true
        });
    }
})

module.exports = EditorBox;
let React = require('react');
let $ = require('jquery');

//JSON Editor plugin
var JSONEditor = require('jsoneditor');

JSONEditor.defaults.options.theme = 'bootstrap3';

let starting_value = {}

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

    getDefaultProps: function () {
        return {
            startValue: {}
        };
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
    },

    componentDidUpdate: function () {
        console.log(this.props.startValue);

        var po = JSON.parse(this.props.startValue);

        var po_template_function_end_user = {
            "name": po.definition.command.name,
            "command": po.definition.command
        };
        this.editor.setValue(po_template_function_end_user);
    }

})

module.exports = EditorBox;
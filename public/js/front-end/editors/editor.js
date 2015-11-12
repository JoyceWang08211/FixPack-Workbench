let React = require('react');
let $ = require('jquery');

//JSON Editor plugin
var JSONEditor = require('jsoneditor');

//Function scheme
//let functionScheme = require('../../back-end/model/FunctionModel');
let functionScheme = require('../../back-end/model/function/Function');
let macroScheme = require('../../back-end/model/MacroModel');
let testcaseScheme = require('../../back-end/model/TestcaseModel');

JSONEditor.defaults.options.theme = 'bootstrap3';

let sample = {};
let editor_type = window.location.href.split('/').pop();

switch (editor_type) {
    case 'function':
        sample = functionScheme.FunctionRoot;
        break;
    case 'macro':
        sample = macroScheme.MacroRoot;
        break;
    case 'testcase':
        sample = testcaseScheme.TestcaseRoot;
        break;
    default:
        break;
}

let EditorBox = React.createClass({
    editor: {},

    handleSave: function () {
        var payload = {
            type: editor_type,
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
            disable_properties: true,
            no_additional_properties: true,
            required_by_default: true
        });
    },

    componentDidUpdate: function () {
        var po = JSON.parse(this.props.startValue);
        var po_template_end_user;

        switch (editor_type) {
            case 'function':
                po_template_end_user = {
                    "name": po.definition.name,
                    "default": po.definition.default,
                    "command": po.definition.command
                };
                break;
            case 'macro':
                po_template_end_user = {
                    "name": po.definition.name,
                    "execute": po.definition.command
                };
                break;
            case 'testcase':
                po_template_end_user = {
                    "name": po.definition.name,
                    "default": po.definition.default,
                    "command": po.definition.command
                };
                break;
            default:
                break;
        }


        this.editor.setValue(po_template_end_user);
    }

});

module.exports = EditorBox;
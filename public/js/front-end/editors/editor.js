let React = require('react');
let $ = require('jquery');

//JSON Editor plugin
var JSONEditor = require('jsoneditor');

//Function scheme
let functionScheme = require('../../back-end/model/FunctionModel');

JSONEditor.defaults.options.theme = 'bootstrap3';

let sample = {};

switch (window.location.href.split('/').pop()) {
    case 'function':
        sample = functionScheme.FunctionRoot;
        break;
    case 'macro':
        sample = functionScheme.FunctionRoot;
        break;
    case 'testcase':
        sample = functionScheme.FunctionRoot;
        break;
    default:
        break;
}

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
            disable_properties: true,
            no_additional_properties: true,
            required_by_default: true
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

});

module.exports = EditorBox;
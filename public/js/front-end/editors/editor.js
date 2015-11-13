let React = require('react');
let $ = require('jquery');

let editor_type = window.location.href.split('/').pop();

let EditorBox = React.createClass({
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
    }
});

module.exports = EditorBox;
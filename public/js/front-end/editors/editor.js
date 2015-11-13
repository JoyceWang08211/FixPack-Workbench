let React = require('react');
let pd = require('pretty-data').pd;
let $ = require('jquery');

let editor_type = window.location.href.split('/').pop();

let ListGroupBox = require('../common/listGroup');

let EditorBox = React.createClass({
    handleSave() {
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

    getDefaultProps() {
        return {
            fileName: ''
        };
    },

    render() {
        return (
            <div>
                <div id='control_btn' className='row'>
                    <div className="btn-group" role="group" aria-label="save">
                        <button type="button" className="btn btn-default" onClick={this.handleSave}>Save</button>
                    </div>
                </div>
                <div id='diaplay_file' className='row'>
                    <div className='col-xs-3'>
                        <ListGroupBox/>
                    </div>
                    <div className='col-xs-9'>
                        <textarea className="form-control" rows="45"></textarea>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = EditorBox;
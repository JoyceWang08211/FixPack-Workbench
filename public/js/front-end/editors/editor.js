let React = require('react');
let $ = require('jquery');
let pd = require('pretty-data').pd;
let Clipboard = require('clipboard');

let editor_type = window.location.href.split('/').pop();

let inputs = require('../common/inputs');
let ProfileEntry = inputs.inputWithCopyButton;

let ControlBox = React.createClass({
    handleSave() {
        var payload = {
            type: editor_type
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

    render()
    {
        return (
            <div id='control_btn' className='row'>
                <div className="btn-group" role="group" aria-label="save">
                    <button type="button" className="btn btn-default" onClick={this.handleSave}>Save
                    </button>
                </div>
            </div>
        )
    }
});

let ProfileBox = React.createClass({
    getDefaultProps(){
        return {
            fileName: ''
        };
    },

    render(){
        let html;

        if (this.props.fileName != '')
            html = (
                <div>
                    <p>{this.props.fileName} Info</p>
                    <dl>
                        <dt>File Name</dt>
                        <dd>
                            <ProfileEntry
                                defaultValue={this.props.fileName}
                                />
                        </dd>
                    </dl>
                </div>
            )

        else
            html = (
                <div>
                    <p>No file is selected.</p>
                </div>
            );

        return html;
    }
});

var ListGroupBox = React.createClass({
        getDefaultProps(){
            return {
                test: '123'
            }
        },

        render(){
            return (
                <div>{this.props.test}</div>
            )
        }
    }
);

let EditorBox = React.createClass({
    getDefaultProps() {
        return {
            fileName: ''
        };
    },

    render() {
        return (
            <div>
                <div id='diaplay_file' className='row'>
                    <div className='col-xs-3'>
                        <ControlBox/>
                        <ProfileBox fileName={this.props.fileName}/>
                        <ListGroupBox/>
                    </div>
                    <div className='col-xs-9'>
                        <textarea className="form-control" rows="48"></textarea>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = EditorBox;
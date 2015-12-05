let React = require('react');
let createFragment = require('react-addons-create-fragment');
let $ = require('jquery');
let pd = require('pretty-data').pd;
let Clipboard = require('clipboard');

let editor_type = window.location.href.split('/').pop();

let profile = require('./profile');
let ProfileEntry = profile.ProfileEntry;

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
            type: 'function',
            profile: {}
        };
    },

    render(){
        let profileHTML;
        let fileName = this.props.profile.name;
        let defaultCommand = this.props.profile.default_command;

        if (fileName != '' && fileName != undefined)
            switch (this.props.type) {
                case 'function':
                    profileHTML = (
                        <div>
                            <h3>{fileName} Info</h3>
                            <dl>
                                <dt>File Type</dt>
                                <dd>
                                    <ProfileEntry value={this.props.type}/>
                                </dd>
                                <dt>File Name</dt>
                                <dd>
                                    <ProfileEntry value={fileName}/>
                                </dd>
                                <dt>Default Command</dt>
                                <dd>
                                    <ProfileEntry value={defaultCommand}/>
                                </dd>
                            </dl>
                        </div>
                    )
                    break;
                case 'macro':

                    break;
                case 'testcase':

                    break;
                default:
                    break;
            }
        else
            profileHTML = (
                <div>
                    <p>No file is selected.</p>
                </div>
            );

        return profileHTML;
    }
});

var ListGroupBox = React.createClass({
        getDefaultProps(){
            return {
                lists: [],
                name: ''
            }
        },

        render(){
            let children = [];
            for (let item of this.props.lists) {
                children.push(createFragment({
                    name: item.name
                }));
            }


            let list = React.Children.map(children, (child)=> {
                return <div>{child}</div>
            })

            return (
                <div id='editor_list'>{list}</div>
            );
        }
    }
);

let EditorBox = React.createClass({
    getDefaultProps() {
        return {
            type: 'function',
            fileObj: {}
        };
    },

    render() {
        let editorHTML;
        let profile = this.props.fileObj.profile;
        let list = this.props.fileObj.list;

        switch (this.props.type) {
            case 'function':
                editorHTML = (
                    <div className='col-xs-3'>
                        <ControlBox/>
                        <ProfileBox eidtorType='function' profile={profile}/>
                        <ListGroupBox lists={list}/>
                    </div>
                );
                break;
            case 'macro':
                break;
            case 'testcase':
                break;
            default:
                break;
        }

        return (
            <div>
                <div id='diaplay_file' className='row'>
                    {editorHTML}
                    <div className='col-xs-9'>
                        <textarea className="form-control" rows="48"></textarea>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = EditorBox;
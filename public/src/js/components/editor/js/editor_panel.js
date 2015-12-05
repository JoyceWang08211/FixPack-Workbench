var React = require('react');
var $ = require('jquery');

//JSON Search Input plugin
require('react-dom');

var SelectSearchBox = require('react-select');

//Editor
let EditorBox = require('./editor');

let editor_type = window.location.href.split('/').pop();

const getOptions = () => {
    return fetch('http://' + window.location.host + '/data/common/MenuLists.json')
        .then((response) => {
            return response.json();
        }).then((json) => {
            switch (editor_type) {
                case 'function':
                    return {options: json.functionMenuList};
                    break;
                case 'macro':
                    return {options: json.macroMenuList};
                    break;
                case 'testcase':
                    return {options: json.testcaseMenuList};
                    break;
                default:
                    return {options: {}};
                    break;
            }
        });
};

var EditorPanelBox = React.createClass({
    handleChange(val) {
        $.ajax({
            type: "POST",
            url: "/editors/update",
            data: {
                name: val,
                type: editor_type
            },
            dataType: "json",
            success: (result)=> {
                let fileObject = JSON.parse(result);

                this.setState({
                    currentFile: fileObject
                })
            }
        });
    },

    getInitialState() {
        return {
            currentFile: {}
        };
    },

    render() {
        return (
            <div>
                <div id='search' className='row'>
                    <SelectSearchBox
                        name="poshi-object-name"
                        asyncOptions={getOptions}
                        onChange={this.handleChange}
                        />
                </div>
                <div className='row'>
                    <ul id='editor' className="nav nav-tabs nav-justified">
                        <li role="presentation" className="active">
                            <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a>
                        </li>
                        <li role="presentation">
                            <a href="#settings" aria-controls="settings" role="tab"
                               data-toggle="tab">Settings</a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="profile">
                        <EditorBox editorType={editor_type}
                                   fileObj={this.state.currentFile}/></div>
                    <div role="tabpanel" className="tab-pane" id="settings">3</div>
                </div>
            </div>
        )
    },

    componentDidMount() {
        $('#editor').find('a').click((e)=> {
            e.preventDefault();
            $(this).tab('show')
        })
    }
});

module.exports = EditorPanelBox;
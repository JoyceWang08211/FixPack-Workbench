var React = require('react');
var $ = require('jquery');

//JSON Search Input plugin
require('react-dom')
var SelectSearchBox = require('react-select');

//Editor
let EditorBox = require('./editor');

function openNewFile(val) {
    console.log("Selected: " + val);
}

const getOptions = () => {
    return fetch('http://' + window.location.host + '/data/common/functionMenuLists.json')
        .then((response) => {
            return response.json();
        }).then((json) => {
            return {options: json.functionMenuList};
        });
}

var EditorPanelBox = React.createClass({
    handleChange: function (val) {
        $.ajax({
            type: "POST",
            url: "/editors/update",
            data: {name: val},
            dataType: "json",
            success: (result)=> {
                this.setState({
                    currentValue: result
                })
            }
        });
    },

    getInitialState: function () {
        return {
            currentValue: {}
        };
    },

    render: function () {
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
                            <a href="#home" aria-controls="home" role="tab"
                               data-toggle="tab">Home</a>
                        </li>
                        <li role="presentation">
                            <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a>
                        </li>
                        <li role="presentation">
                            <a href="#settings" aria-controls="settings" role="tab"
                               data-toggle="tab">Settings</a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="home">
                        <EditorBox startValue={this.state.currentValue}/>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="profile">2</div>
                    <div role="tabpanel" className="tab-pane" id="settings">3</div>
                </div>
            </div>
        )
    },

    componentDidMount: function () {
        $('#editor a').click(function (e) {
            e.preventDefault()
            $(this).tab('show')
        })
    }
});

module.exports = EditorPanelBox;
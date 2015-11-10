var React = require('react');
var $ = require('jquery');

//JSON Search Input plugin
require('react-dom')
var SelectSearchBox = require('react-select');

//Editor
let EditorBox = require('./editor');

var options = [
    {value: 'one', label: 'One'},
    {value: 'two', label: 'Two'}
];

function logChange(val) {
    console.log("Selected: " + val);
}

var EditorPanelBox = React.createClass({
    render: function () {
        return (
            <div>
                <div id='search' className='row'>
                    <SelectSearchBox
                        name="poshi-object-name"
                        options={options}
                        onChange={logChange}
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
                        <EditorBox/>
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
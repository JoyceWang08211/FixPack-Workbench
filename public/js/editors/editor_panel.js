var React = require('react');
var $ = require('jquery');

//JSON Editor plugin
var JSONEditor = require('jsoneditor');
//JSON Search Input plugin
require('react-dom')
var SelectSearchBox = require('react-select');

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
            <div className='row'>
                <div className='col-xs-12'>
                    <SelectSearchBox
                        name="form-field-name"
                        value="one"
                        options={options}
                        onChange={logChange}
                        />
                </div>
            </div>)
    }
});

module.exports = EditorPanelBox;
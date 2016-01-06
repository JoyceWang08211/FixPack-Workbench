const $ = require('jquery'), React = require('react'), ReactDOM = require('react-dom');

import Select from 'react-select'

require('./css/recorder.css')
require('./css/react-select.min.css')

var options = [
    {value: 'one', label: 'One'},
    {value: 'two', label: 'Two'},
    {value: 'three', label: 'Three'}
];

let Planer = React.createClass({
    render(){
        return (
            <Select
                name="form-field-name"
                value="one"
                options={options}
                />
        )
    }
})

module.exports = Planer
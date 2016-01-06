const $ = require('jquery'), React = require('react'), ReactDOM = require('react-dom');

import Select from 'react-select'

require('./css/react-select.min.css')

let options = [
    {value: '0', label: 'Jan'},
    {value: '1', label: 'Feb'},
    {value: '2', label: 'Mar'}
];

let options1 = [
    {id: '1', name: 'LPS-12345'},
    {id: '2', name: 'LPS-12345'},
    {id: '3', name: 'LPS-12345'}
];

let Planer = React.createClass({
    getInitialState(){
        return {
            val:'Jan'
        }
    },

    selectMonth(val){
        this.setState({val:options[val]});

        fetch(`/data/recorder/${options[val].label}.json`)
            .then((response)=> {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then((json)=> {
                this.props.setList(json.SubTaskList);
            });
    },

    render(){
        return (
            <Select
                name="form-field-name"
                value={this.state.val}
                options={options}
                onChange={this.selectMonth}
                />
        )
    },

    componentDidMount(){
        let currentDate=new Date()
        this.selectMonth(currentDate.getMonth())
    }
})

module.exports = Planer
let React = require('react');
let $ = require('jquery');
let Clipboard = require('clipboard');

exports.inputWithCopyButton = React.createClass({
    clipboard: {},

    getDefault(){
        return {
            defaultValue: 'defaultValue'
        }
    },

    render(){
        return (
            <div className="input-group">
                <input type='text' ref='target' className="form-control" defaultValue={this.props.defaultValue}></input>
                <span className="input-group-btn">
                <button className="btn btn-default" ref='trigger' type="button">Copy</button>
                </span>
            </div>
        )
    },
    componentDidMount(){
        this.clipboard = new Clipboard(this.refs.trigger, {
            target: ()=> {
                return this.refs.target;
            }
        });

        this.clipboard.on('success', function (e) {
            console.log(`Process Copy command successfully. The cotent is ${e.text}.`);
        });
        this.clipboard.on('error', function (e) {
            console.log(`Fail to process Copy command.`);
        });
    },

    componentWillUnmount(){
        this.clipboard.destroy();
    }
});
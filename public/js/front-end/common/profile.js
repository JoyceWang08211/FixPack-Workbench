let React = require('react');
let $ = require('jquery');
let Clipboard = require('clipboard');

exports.ProfileEntry = React.createClass({
    clipboard: {},

    render(){
        return (
            <div className="input-group">
                <p ref='target'>{this.props.value}</p>
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
var React = require('react');
var $ = require('jquery');

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

module.exports = ListGroupBox;

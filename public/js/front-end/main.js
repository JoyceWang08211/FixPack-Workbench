var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

$(document).ready(function () {
        var ContentBox = React.createClass({
            render: function () {
                return (
                    <div><a href='/editors'>Here</a></div>
                )
            }
        });

        ReactDOM.render(<ContentBox/>, document.getElementById('_content'));
    }
)


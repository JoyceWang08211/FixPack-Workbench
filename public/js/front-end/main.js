var React = require('react');
var $ = require('jquery');

$(document).ready(function () {
        var ContentBox = React.createClass({
            render: function () {
                return (
                    <div><a href='/editors'>Here</a></div>
                )
            }
        });

        React.render(<ContentBox/>, document.getElementById('_content'));
    }
)


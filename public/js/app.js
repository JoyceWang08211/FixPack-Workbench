window.onload=function() {
    var ContentBox = React.createClass({
        render: function () {
            return (
                <div>content</div>
            )
        }
    });

    React.render(<ContentBox/>, document.getElementById('_content'));
};


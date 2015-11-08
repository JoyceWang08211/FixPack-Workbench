var React = require('react');
var $ = require('jquery');
//metisMenu plugin
require('../lib/plugins/metisMenu.min');

var EditorTypeBox = React.createClass({
    getDefaultProps: function () {
        return {
            isActive: false,
            menuTitle: 'Poshi Object'
        }
    },

    render: function () {
        return (
            <li className={this.props.isActive?'active':''}>
                <a href="#" aria-expanded="true">{this.props.menuTitle}</a>
                <ul aria-expanded="true">
                    <li>
                        <a href="#">
                            <span className="sidebar-nav-item-icon glyphicon glyphicon-search"></span>
                            Create the new {this.props.menuTitle}
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="sidebar-nav-item-icon glyphicon glyphicon-file"></span>
                            Open the exited {this.props.menuTitle}
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="sidebar-nav-item-icon glyphicon glyphicon-question-sign"></span>
                            Tips of the {this.props.menuTitle}
                        </a>
                    </li>
                </ul>
            </li>
        )
    }

});

var ToolbarBox = React.createClass({
    render: function () {
        return (<aside className="sidebar">
            <nav className="sidebar-nav">
                <ul className="metismenu" id="menu">
                    <EditorTypeBox isActive={true} menuTitle='Function'/>
                </ul>
            </nav>
        </aside>)
    },

    componentDidMount: function () {
        $("#menu").metisMenu({
            preventDefault: false
        });
    }
});

module.exports = ToolbarBox;
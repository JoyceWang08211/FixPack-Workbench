var React = require('react');
var $ = require('jquery');
//metisMenu plugin
require('../lib/plugins/metisMenu.min')

var ToolbarBox = React.createClass({
    render: ()=> {
        return (
            <aside className="sidebar">
                <nav className="sidebar-nav">
                    <ul className="metismenu list-unstyled" id="menu">
                        <li className="active">
                            <a href="#" aria-expanded="true">Menu 1</a>
                            <ul aria-expanded="true">
                                <li>
                                    <a href="https://github.com/onokumus/metisMenu">
                                        <span className="sidebar-nav-item-icon glyphicon glyphicon-search"></span>
                                        Fork
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/onokumus/metisMenu">
                                        <span className="sidebar-nav-item-icon fa fa-code-fork"></span>
                                        Fork
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/onokumus/metisMenu">
                                        <span className="sidebar-nav-item-icon fa fa-code-fork"></span>
                                        Fork
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" aria-expanded="true">Menu 2</a>
                            <ul aria-expanded="true">
                                <li>2</li>
                                <li>2</li>
                                <li>2</li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </aside>
        );
    },

    componentDidMount: ()=> {
        $("#menu").metisMenu({
            preventDefault: false
        });
    }
});

module.exports = ToolbarBox
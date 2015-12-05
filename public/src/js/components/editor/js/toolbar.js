var React = require('react');
var $ = require('jquery');
//metisMenu plugin
require('./lib/metisMenu.min');

var EditorUpdateBox = React.createClass({
    getDefaultProps: function () {
        return {
            isActive: false
        }
    },

    render: function () {
        return (
            <li className={this.props.isActive?'active':''}>
                <a href="#" aria-expanded="true">
                    <span className="sidebar-nav-item-icon fa fa-github fa-lg"></span>
                    POSHI Editor v0.1.0</a>
                <ul aria-expanded="true">
                    <li>
                        <a href="#">
                            GitHub Source
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Update
                        </a>
                    </li>
                </ul>
            </li>
        )
    }
});

var EditorTypeBox = React.createClass({
    getDefaultProps: function () {
        return {
            isActive: false
        }
    },

    render: function () {
        return (
            <li className={this.props.isActive?'active':''}>
                <a href="#" aria-expanded="true">
                    <span className="sidebar-nav-item-icon glyphicon glyphicon-file"></span>
                    Page Object Editor</a>
                <ul aria-expanded="true">
                    <li>
                        <a href="/editors/function">
                            Function Files
                        </a>
                    </li>
                    <li>
                        <a href="/editors/macro">
                            Macro Files
                        </a>
                    </li>
                    <li>
                        <a href="/editors/testcase">
                            Testcase Files
                        </a>
                    </li>
                    <li>
                        <a href="/editors/path">
                            Path Files
                        </a>
                    </li>
                </ul>
            </li>
        )
    }
});

var EditorTipsBox = React.createClass({
    getDefaultProps: function () {
        return {
            isActive: false
        }
    },

    render: function () {
        return (
            <li className={this.props.isActive?'active':''}>
                <a href="#" aria-expanded="true">
                    <span className="sidebar-nav-item-icon glyphicon glyphicon-question-sign"></span>
                    Tips</a>
                <ul aria-expanded="true">
                    <li>
                        <a href="#">
                            Tip 1
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Tip 2
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Tip 3
                        </a>
                    </li>
                </ul>
            </li>
        )
    }
});

var ToolbarBox = React.createClass({
    render: function () {
        return (
            <aside className="sidebar">
                <nav className="sidebar-nav">
                    <ul className="metismenu" id="menu">
                        <EditorUpdateBox/>
                        <EditorTypeBox isActive={true}/>
                        <EditorTipsBox/>
                    </ul>
                    <div className='tooltips'>
                        <p>some tooltips</p>
                    </div>
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
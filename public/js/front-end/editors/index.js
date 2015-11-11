var React = require('react');
var ReactDOM = require('react-dom')
var $ = require('jquery');

var ToolbarBox = require('./toolbar');
var EditorPanelBox = require('./editor_panel');

$(()=> {
    ReactDOM.render(<ToolbarBox/>, document.getElementById('editor_toolbar'));
    ReactDOM.render(<EditorPanelBox/>, document.getElementById('editor_panel'));
})



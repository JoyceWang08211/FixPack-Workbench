const $ = require('jquery'), React = require('react'), ReactDOM = require('react-dom');

import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'

import App from '../ui/index.js'

import * as subTasksAction from '../actions/subTasksAction.js'
import ImmutableRenderMixin from 'react-immutable-render-mixin'

function mapStateToProps(state) {
    return {
        subTaskList: state.subTasks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        subTasksAction: bindActionCreators(subTasksAction, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


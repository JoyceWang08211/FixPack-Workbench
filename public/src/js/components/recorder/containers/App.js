const $ = require('jquery'), React = require('react'), ReactDOM = require('react-dom');

import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'

import App from '../ui/index.js'

import * as subTasksAction from '../actions/subTasksAction.js'
import * as plannerAction from '../actions/plannerAction.js'

function mapStateToProps(state) {
    return {
        subTaskList: state.subTasks,
        planner: state.planner
    }
}

function mapDispatchToProps(dispatch) {
    return {
        subTasksAction: bindActionCreators(subTasksAction, dispatch),
        plannerAction: bindActionCreators(plannerAction, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


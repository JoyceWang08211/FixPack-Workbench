const $ = require('jquery'), React = require('react'), ReactDOM = require('react-dom');

import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import {Tabs, Tab, Row, Col} from 'react-bootstrap'

import PlanerBox from '../ui/planer.js'
import ManualBox from '../ui/manual.js'

import * as subTasksAction from '../actions/subTasksAction.js'
import ImmutableRenderMixin from 'react-immutable-render-mixin'

const App = React.createClass({
    getDefaultProps(){

    },

    render() {
        return (
            <Tabs defaultActiveKey={1}>
                <Tab eventKey={1} title="Record">
                    <Row className="show-grid">
                        <Col xs={12} className='fp-panel'>
                            <PlanerBox/>
                        </Col>
                        <Col xs={3}><ManualBox
                            subTaskList={this.props.subTaskList}
                            action={this.props.subTasksAction}/>
                        </Col>
                        <Col xs={3}>Automation Testing</Col>
                        <Col xs={3}>Verify Tickets</Col>
                        <Col xs={3}>Others</Col>
                    </Row>
                </Tab>
                <Tab eventKey={2} title="Summary">Tab 3 content</Tab>
            </Tabs>
        );
    }
})

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

if (module.hot) {
    module.hot.accept();
}


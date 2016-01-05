const $ = require('jquery'), React = require('react'), ReactDOM = require('react-dom');

import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import {Tabs, Tab, Row, Col} from 'react-bootstrap'

import PlanerBox from '../planer/planer.js'
import ManualBox from '../manual/manual.js'

import * as ModalAction from '../actions/modalAction.js'
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
                        <Col xs={3}><ManualBox/></Col>
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
        showModal: state.showModal
    }
}

function mapDispatchToProps(dispatch) {
    return {
        modalActions: bindActionCreators(ModalAction, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

if (module.hot) {
    module.hot.accept();
}

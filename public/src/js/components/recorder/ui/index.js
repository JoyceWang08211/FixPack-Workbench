const $ = require('jquery'), React = require('react'), ReactDOM = require('react-dom');

import {Tabs, Tab, Row, Col} from 'react-bootstrap'
import PlanerBox from '../ui/planer.js'
import ManualBox from '../ui/manual.js'

const App = React.createClass({
    render() {
        return (
            <Tabs defaultActiveKey={1}>
                <Tab eventKey={1} title="Record">
                    <Row className="show-grid">
                        <Col xs={12} className='fp-panel'>
                            <PlanerBox planner={this.props.planner}
                                       action={this.props.plannerAction}/>
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

export default App

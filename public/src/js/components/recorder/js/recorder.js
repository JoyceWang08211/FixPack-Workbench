const $ = require('jquery'), React = require('react'), ReactDOM = require('react-dom');

import PlanerBox from './planer.js'
import ManualBox from './manual.js'
import {Col, Row} from 'react-bootstrap'

let RecordBox = React.createClass({
    render(){
        return (
            <Row className="show-grid">
                <Col xs={12} className='fp-panel'>
                    <PlanerBox/>
                </Col>
                <Col xs={3}><ManualBox/></Col>
                <Col xs={3}>Automation Testing</Col>
                <Col xs={3}>Verify Tickets</Col>
                <Col xs={3}>Others</Col>
            </Row>
        )
    }
})

module.exports = RecordBox;

const $ = require('jquery');
import { Component, PropTypes } from 'react';
import {Col, Row} from 'react-bootstrap'

export default class Comparator extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Row className="show-grid">
        <Col xs={5}>
        </Col>
        <Col xs={2}>2</Col>
        <Col xs={5}>3</Col>
      </Row>
    )
  }
};

Comparator.propTypes = {}




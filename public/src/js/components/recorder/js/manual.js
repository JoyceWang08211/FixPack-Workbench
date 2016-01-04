const $ = require('jquery'), React = require('react'), ReactDOM = require('react-dom');

import createFragment from 'react-addons-create-fragment';
import {Col, Row, Button, Modal, Input} from 'react-bootstrap'

const ManualBox = React.createClass({
    getInitialState() {
        return {
            showModal: false,
            lps: '',
            lpsList: []
        };
    },

    handleChange() {
        this.setState({
            lps: this.refs.lps.getValue()
        });
    },

    close() {
        this.setState({showModal: false});
    },

    open() {
        this.setState({showModal: true, lps: ''});
    },

    save(){
        this.state.lpsList.push(this.refs.lps.getValue())

        this.setState({lpsList: this.state.lpsList})

        this.close();
    },

    render(){
        let lpsListHtml = React.Children.map(this.state.lpsList, (child)=> {
            return (
                <Row className="show-grid">
                    <Col xs={6}>
                        {child}
                    </Col>
                </Row>
            )
        })

        return (

            <Row className="show-grid fp-panel">
                <Col xs={12}>
                    <Button bsStyle="primary" bsSize="large" onClick={this.open} block>Add Manual Record</Button>
                </Col>

                {lpsListHtml}

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Manual Record</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Input
                            type="text"
                            value={this.state.lps}
                            placeholder="LPS-*****"
                            label="LPS Number"
                            help="some help information"
                            hasFeedback
                            ref="lps"
                            groupClassName="group-class"
                            labelClassName="label-class"
                            onChange={this.handleChange}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.save} bsStyle='primary'>Save</Button>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Row>
        );
    }
})

module.exports = ManualBox;

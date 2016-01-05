const $ = require('jquery'), React = require('react'), ReactDOM = require('react-dom');

import createFragment from 'react-addons-create-fragment';
import {Col, Row, Button, Modal, Input, PanelGroup, Panel} from 'react-bootstrap'
import {OPEN_MODAL,CLOSE_MODAL} from '../../constants/modalActionType';

const ManualBox = React.createClass({
    validateLPSInput(){
        let str = this.state.lpsModal;
        let reg = /^(LPS-)?\d+$/i;

        return str.match(reg)
    },

    getInitialState() {
        return {
            //showModal: false,
            lpsModal: '',
            lpsList: this.props.lpsList ? this.props.lpsList : []
        };
    },

    handleChange() {
        this.setState({
            lpsModal: this.refs.lps.getValue()
        });
    },

    close() {
        this.setState({showModal: false, lpsModal: ''});
    },

    open() {
        this.setState({showModal: true, lps: ''});
    },

    save(){
        if (this.validateLPSInput()) {
            this.state.lpsList.push(this.refs.lps.getValue())

            this.setState({lpsList: this.state.lpsList})

            this.close();
        }
        else {
            //todo 增加提示类信息
            alert('the input value is invalid')
        }
    },

    render(){
        let lpsListHtml = React.Children.map(this.state.lpsList, (child, i)=> {

            return (
                <Panel header={`LPS-${child}`} eventKey={i}>
                    This is LPS-{child}
                </Panel>
            )
        })

        return (

            <Row className="show-grid fp-panel">
                <Col xs={12}>
                    <Button bsStyle="primary" bsSize="large" onClick={this.open} block>Add Manual Record</Button>
                </Col>

                <Col xs={12}>
                    <PanelGroup defaultActiveKey='1' accordion>
                        {lpsListHtml}
                    </PanelGroup>
                </Col>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Manual Record</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Input
                            type="text"
                            value={this.state.lpsModal}
                            placeholder="LPS-12345 or 12345.."
                            label="LPS Number"
                            help="some help information"
                            bsStyle={this.validateLPSInput()?'success':'error'}
                            hasFeedback
                            ref="lps"
                            groupClassName="group-class"
                            labelClassName="label-class"
                            onChange={this.handleChange}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.save} bsStyle='primary'>Add</Button>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Row>
        );
    }
})

module.exports = ManualBox;

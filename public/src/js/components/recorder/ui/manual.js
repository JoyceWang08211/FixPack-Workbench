const $ = require('jquery'), React = require('react'), ReactDOM = require('react-dom');

import createFragment from 'react-addons-create-fragment';
import {Col, Row, Button, Modal, Input, PanelGroup, Panel} from 'react-bootstrap'


const ManualBox = React.createClass({
    shortCutForSave(e) {
        if (e.keyCode == '13')
            this.save();
    },

    bindPressKeyEvent() {
        document.addEventListener('keydown', this.shortCutForSave)
    },

    unbindPressKeyEvent(){
        document.removeEventListener('keydown', this.shortCutForSave)
    },

    validateLPSInput(){
        let str = this.state.currentValue;
        let reg = /^(LPS-)?\d+$/i;

        return str.match(reg)
    },

    getInitialState() {
        return {
            showModal: false,
            currentValue: ''
        };
    },

    handleChange() {
        this.setState({
            currentValue: this.refs.lps.getValue()
        });
    },

    close() {
        this.setState({showModal: false});
        this.unbindPressKeyEvent();
    },

    open() {
        this.setState({showModal: true},()=> {
            this.refs.lps.getInputDOMNode().focus();
        });

        this.bindPressKeyEvent();
    },

    save(){
        let {action}=this.props;

        if (this.validateLPSInput()) {
            action.addSubTask(this.refs.lps.getValue())
            this.close();
        }
        else {
            //todo 增加提示类信息
            alert('the input value is invalid')
        }
    },

    render(){
        let children = [];

        for (let st of this.props.subTaskList) {
            children.push(createFragment({
                st: (<Panel header={`${st.name}`} eventKey={st.id}>
                    This is {st.name}</Panel>)
            }))
        }

        let _subTaskListHtml = React.Children.map(children, (child)=> {
            return child
        })

        return (

            <Row className="show-grid fp-panel">
                <Col xs={12}>
                    <Button bsStyle="primary" bsSize="large" onClick={this.open} block>Add Manual Record</Button>
                </Col>

                <Col xs={12}>
                    <PanelGroup defaultActiveKey='1' accordion>
                        {_subTaskListHtml}
                    </PanelGroup>
                </Col>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Manual Record</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Input
                            type="text"
                            value={this.state.currentValue}
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

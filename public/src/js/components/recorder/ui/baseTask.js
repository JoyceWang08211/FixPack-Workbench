const $ = require('jquery'), React = require('react'), ReactDOM = require('react-dom');

import createFragment from 'react-addons-create-fragment';
import {Col, Row, Button, Modal, Input, PanelGroup, Panel} from 'react-bootstrap'


export default class BaseTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    shortCutForSave(e) {
        if (e.keyCode == '13')
            this.save();
    }

    bindPressKeyEvent() {
        document.addEventListener('keydown', this.shortCutForSave.bind(this))
    }


    unbindPressKeyEvent() {
        document.removeEventListener('keydown', this.shortCutForSave.bind(this))
    }


    close() {
        this.setState({showModal: false});
        this.unbindPressKeyEvent();
    }

    open() {
        this.setState({showModal: true});
        this.bindPressKeyEvent();
    }

    getRenderTemplate(title, panelList, formList) {
        return (
            <Row className="show-grid fp-panel">
                <Col xs={12}>
                    <Button bsStyle="primary" bsSize="large" onClick={this.open.bind(this)} block>
                        {title}</Button>
                </Col>

                <Col xs={12}>
                    <PanelGroup defaultActiveKey='' accordion>
                        {panelList}
                    </PanelGroup>
                </Col>

                <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Manual Record</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {formList}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.save.bind(this)} bsStyle='primary'>Add</Button>
                        <Button onClick={this.close.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Row>
        );
    }
}




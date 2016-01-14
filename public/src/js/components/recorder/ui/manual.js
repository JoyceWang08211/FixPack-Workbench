const $ = require('jquery'), React = require('react'), ReactDOM = require('react-dom');

import BaseTask from './baseTask.js'
import createFragment from 'react-addons-create-fragment';
import {Input, Panel, Row, Col} from 'react-bootstrap'


export default class ManualBox extends BaseTask {
    validate() {
        let str = this.state.currentValue ? this.state.currentValue : '';
        let reg = /^(LPS-|LPP-)?\d+$/i;

        return str.match(reg)
    }

    //todo auto focus
    //focus() {
    //    this.refs.lps.getInputDOMNode().focus();
    //}

    save() {
        let {action}=this.props;

        if (this.validate()) {
            action.addSubTask(this.refs.lps.getValue())
            this.close();
        }
        else {
            //todo 增加提示类信息
            alert('the input value is invalid')
        }
    }

    handleChange() {
        this.setState({
            currentValue: this.refs.lps.getValue()
        });
    }

    getPanelList(list) {
        let {action}=this.props,children = [];

        for (let st of list) {
            children.push(createFragment({
                st: (
                    <Panel header={<a>{st.name}-{st.id}</a>} eventKey={st.id}>
                        <Row className="show-grid">
                            <Col xs={3}><a>Edit</a></Col>
                            <Col xs={3}>
                                <a onClick={()=>{action.deleteSubTask(st.id)}}>Remove</a>
                            </Col>
                        </Row>
                    </Panel>)
            }))
        }

        return React.Children.map(children, (child)=> {
            return child
        })
    }

    getFormList() {
        return (
            <Input
                type="text"
                value={this.state.currentValue}
                placeholder="LPS-12345, LPP-12345 or 12345.."
                label="LPS Number"
                help="some help information"
                bsStyle={this.validate()?'success':'error'}
                hasFeedback
                ref="lps"
                groupClassName="group-class"
                labelClassName="label-class"
                onChange={this.handleChange.bind(this)}/>
        )
    }

    render() {
        let title = 'Add Manual Verified Record';
        let panelList = this.getPanelList(this.props.subTaskList);
        let formList = this.getFormList();

        return super.getRenderTemplate(title, panelList, formList)
    }
}


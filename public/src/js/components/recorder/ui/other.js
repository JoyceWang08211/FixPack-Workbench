const $ = require('jquery'), React = require('react'), ReactDOM = require('react-dom');

import BaseTask from './baseTask.js'
import createFragment from 'react-addons-create-fragment';
import {Input} from 'react-bootstrap'


export default class AutomationBox extends BaseTask {
    validate() {
        let str = this.state.currentValue ? this.state.currentValue : '';
        let reg = /^(LPS-)?\d+$/i;

        return str.match(reg)
    }

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
        let children = [];

        for (let st of list) {
            children.push(createFragment({
                st: (<Panel header={`${st.name}-${st.id}`} eventKey={st.id}>
                    This is {`${st.name}-${st.id}`}</Panel>)
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
                placeholder="LPS-12345 or 12345.."
                label="LPS Number"
                help="some help information"
                hasFeedback
                bsStyle={this.validate()?'success':'error'}
                ref="lps"
                groupClassName="group-class"
                labelClassName="label-class"
                onChange={this.handleChange.bind(this)}/>
        )
    }

    render() {
        let title = 'Add Other Metric Record';
        let panelList = this.getPanelList([]);
        let formList = this.getFormList()

        return super.getRenderTemplate(title,panelList, formList)
    }
}

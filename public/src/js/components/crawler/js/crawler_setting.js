const $ = require('jquery');
import React from 'react';

let InputEntry = React.createClass({
    getDefaultProps(){
        return {
            id: '',
            spanName: '',
            value: '',
            placeholder: '',
            onChange: ()=> {
            }
        };
    },

    render(){
        return (
            <div className="input-group input-group-custom">
                <span className="input-group-addon input-group-addon-custom"
                      id={this.props.id}>{this.props.spanName}</span>
                <input type="text" className="form-control" name={this.props.id} placeholder={this.props.placeholder}
                       aria-describedby={this.props.id}
                       onChange={this.props.onChange} value={this.props.value}/>
            </div>
        );
    }
});

let RadioEntry = React.createClass({
    getDefaultProps(){
        return {
            title: 'Title',
            isChecked: true
        }
    },

    render(){
        return (
            <div className="input-group input-group-custom">
                <div className="radio">
                    <p>{this.props.title}</p>
                    <label>
                        <input type="radio" name="isBaseline" value="yes" defaultChecked={this.props.isChecked}
                               onChange={this.props.onChange}/>
                        Patch Level
                    </label>
                    <label>
                        <input type="radio" name="isBaseline" value="no" defaultChecked={!this.props.isChecked}
                               onChange={this.props.onChange}/>
                        Baseline Level
                    </label>
                </div>
            </div>
        );
    }
});

let SettingBox = React.createClass({
    handleInputChange(e){
        let state = this.state;

        state[$(e.target).attr('aria-describedby')] = e.target.value;

        this.setState(state);
    },

    handleRadioChange(e){
        let state = this.state;

        state[$(e.target).attr('name')] = e.target.value;

        this.setState(state);
    },

    getDefaultProps(){
        return {
            setting: {
                user_info: {},
                fixpack_info: {},
                crawler_info: {},
                jenkins_info: {}
            }
        };
    },

    getInitialState(){
        const userInfo = this.props.setting.user_info;
        const fixpackInfo = this.props.setting.fixpack_info;
        const crawlerInfo = this.props.setting.crawler_info;
        const jenkinsInfo = this.props.setting.jenkins_info;

        return {
            username: userInfo.username,
            password: userInfo.password,
            fpName: fixpackInfo.name,
            fpTicket: fixpackInfo.ticket,
            fpBuild: fixpackInfo.build,
            patchURL: crawlerInfo.url,
            baselineURL: crawlerInfo.url_baseline,
            crawlerBuild: crawlerInfo.build,
            isBaseline: crawlerInfo.is_baseline,
            jenkinsHost: jenkinsInfo.host
        };
    },

    render() {
        return (
            <div className='col-xs-5'>
                <form action='/crawler/save_setting' method='post'>

                    <div className='row'>
                        <div className='col-xs-12'>
                            <h2>Crawler Setting</h2>

                            <dl>
                                <dt><h3>User Info</h3></dt>
                                <dd>
                                    <InputEntry id='username' spanName='Username' value={this.state.username}
                                                placeholder='@liferay.com' onChange={this.handleInputChange}/>
                                    <InputEntry id='password' spanName='Password' value={this.state.password}
                                                placeholder='your password' onChange={this.handleInputChange}/>
                                </dd>
                                <dt><h3>FixPack Info</h3></dt>
                                <dd>
                                    <InputEntry id='fpName' spanName='Name' value={this.state.fpName}
                                                placeholder='the fipack name, as portal-**-6210'
                                                onChange={this.handleInputChange}/>
                                    <InputEntry id='fpTicket' spanName='Ticket' value={this.state.fpTicket}
                                                placeholder='the ticket number of this fixpack, as LRQA-*****'
                                                onChange={this.handleInputChange}/>
                                    <InputEntry id='fpBuild' spanName='Build' value={this.state.fpBuild}
                                                placeholder='the build number of this fixpack'
                                                onChange={this.handleInputChange}/>
                                </dd>
                                <dt><h3>Crawler Info</h3></dt>
                                <dd>
                                    <InputEntry id='patchURL' spanName='Patch URL' value={this.state.patchURL}
                                                placeholder='the Patch URL of Jenkins Server'
                                                onChange={this.handleInputChange}/>
                                    <InputEntry id='baselineURL' spanName='Baseline URL' value={this.state.baselineURL}
                                                placeholder='the Baseline URL of Jenkins Server'
                                                onChange={this.handleInputChange}/>
                                    <InputEntry id='crawlerBuild' spanName='Crawler Build'
                                                value={this.state.crawlerBuild}
                                                placeholder='the Patch URL of Jenkins Server'
                                                onChange={this.handleInputChange}/>
                                    <RadioEntry isChecked={this.state.isBaseline} title="Crawler Level"
                                                onChange={this.handleRadioChange}/>
                                </dd>
                                <dt><h3>Jenkins Info</h3></dt>
                                <dd>
                                    <InputEntry id='jenkinsHost' spanName='Jenkins Host' value={this.state.jenkinsHost}
                                                placeholder='the base host of Jenkins Server, as test.liferay.com'
                                                onChange={this.handleInputChange}/>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-12'>
                            <div className="btn-group" role="group" aria-label="start">
                                <button type="submit" className="btn btn-default">Save
                                </button>
                                <button type="button" className="btn btn-default" onClick={this.props.handleStart}>Start
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = SettingBox;


const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

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
                <input type="text" className="form-control" placeholder={this.props.placeholder}
                       aria-describedby={this.props.id}
                       onChange={this.props.onChange} value={this.props.value}/>
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

    },

    handleSaveAction(){
        console.log(this.state);
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
                                <InputEntry id='crawlerBuild' spanName='Crawler Build' value={this.state.patchURL}
                                            placeholder='the Patch URL of Jenkins Server'
                                            onChange={this.handleInputChange}/>
                                //TODO 实现radio
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
                    <div className='col-xs-3'>
                        <div className="btn-group" role="group" aria-label="start">
                            <button type="button" className="btn btn-group" onClick={this.handleSaveAction}>Start
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

let LogBox = React.createClass({
    render() {
        return (
            <div className='col-xs-7'>
                <div className='row'>
                    <div className='col-xs-12'>

                    </div>
                </div>
            </div>
        );
    }
});

let CrawlerBox = React.createClass({
    getDefaultProps(){
        return {
            setting: {}
        }
    },

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-xs-8'>
                        <h1>Crawler For Jenkins Server</h1>
                    </div>
                </div>
                <hr/>
                <SettingBox setting={this.props.setting}/>
                <LogBox/>
            </div>
        );
    }
});

$(()=> {
    fetch('/crawler/get_setting')
        .then((res)=> {
            return res.json();
        })
        .then((json)=> {
            const setting = JSON.parse(json);
            ReactDOM.render(<CrawlerBox setting={setting}/>, document.getElementById('crawler'));
        });

});

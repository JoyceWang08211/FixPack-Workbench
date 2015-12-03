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
            setting: {}
        };
    },

    getInitialState(){
        const setting = this.props.setting;

        return {
            username: setting.username,
            password: setting.password
        };
    },

    render() {
        return (
            <div className='col-xs-4'>
                <h2>Crawler Setting</h2>
                <dl>
                    <dt><h3>User Info</h3></dt>
                    <dd>
                        <InputEntry id='username' spanName='Username' value={this.state.username}
                                    placeholder='@liferay.com' onChange={this.handleInputChange}/>
                        <InputEntry id='password' spanName='Password' value={this.state.password}
                                    placeholder='your password' onChange={this.handleInputChange}/>
                    </dd>
                </dl>
                <div className="btn-group crawler-btn-start" role="group" aria-label="start">
                    <button type="button" className="btn btn-default" onClick={this.handleSaveAction}>Start</button>
                </div>

            </div>
        );
    }
});

let LogBox = React.createClass({
    render() {
        return (
            <div className='col-xs-8'>
                <div className='row'>
                    <div className='col-xs-12'>

                    </div>
                </div>
            </div>
        );
    }
});

let CrawlerBox = React.createClass({
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-xs-8'>
                        <h1>Crawler For Jenkins Server</h1>
                    </div>
                </div>
                <hr/>
                <SettingBox/>
                <LogBox/>
            </div>
        );
    }
});

$(()=> {
    ReactDOM.render(<CrawlerBox/>, document.getElementById('crawler'));
});

const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

let SettingBox = React.createClass({
    handleInputChange(e){
        let state = this.state;

        state[$(e.target).attr('aria-describedby')] = e.target.value;

        this.setState(state);
    },

    getDefaultProps(){
        return {
            setting: {}
        };
    },

    getInitialState(){
        return {
            username: this.props.setting.username
        };
    },

    render() {
        return (
            <div className='col-xs-4'>
                <p>Crawler Setting</p>

                <div className="input-group">
                    <span className="input-group-addon" id="username">Username</span>
                    <input type="text" className="form-control" placeholder="@liferay.com" aria-describedby="username"
                           onChange={this.handleInputChange} value={this.state.username}/>
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
                        <div className="btn-group crawler-btn-start" role="group" aria-label="start">
                            <button type="button" className="btn btn-default">Start</button>
                            <button type="button" className="btn btn-default">Middle</button>
                            <button type="button" className="btn btn-default">Right</button>
                        </div>
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

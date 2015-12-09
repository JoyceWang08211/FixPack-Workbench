const $ = require('jquery');
import React from 'react';

import SettingBox from './crawler_setting.js';
import LogBox from './crawler_logs.js';

let CrawlerBox = React.createClass({
    getInitialState(){
        return {
            progress: 0
        };
    },

    handleStart(){
        fetch("/crawler/start_job", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                test: 'Hubot',
                login: 'hubot'
            })
        })

        this.setState({
            progress: this.state.progress += 0.01
        })
    },

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
                <SettingBox setting={this.props.setting} handleStart={this.handleStart}/>
                <LogBox progress={this.state.progress}/>
            </div>
        );
    }
});

module.exports = CrawlerBox;

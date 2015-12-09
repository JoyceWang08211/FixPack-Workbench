const $ = require('jquery');
import React from 'react';

import SettingBox from './crawler_setting.js';
import LogBox from './crawler_logs.js';

let timer;

let CrawlerBox = React.createClass({
    getInitialState(){
        return {
            progress: 0
        };
    },

    handleProgressQuery(){
        fetch("/crawler//progress_query", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                progress: this.state.progress
            })
        }).then((res)=> {
            return res.json();
        }).then((json)=> {
            this.setState({progress: json.progress})

            if (this.state.progress.toFixed(2) == 0.1)
                clearInterval(timer);
        })
    },

    handleStart(){
        //fetch("/crawler/start_job", {
        //    method: "POST",
        //    headers: {
        //        'Accept': 'application/json',
        //        'Content-Type': 'application/json'
        //    },
        //    body: JSON.stringify({
        //        progress: this.state.progress
        //    })
        //}).then((res)=> {
        //    return res.json();
        //}).then((json)=> {
        //    if (json.status) {
        timer = setInterval(this.handleProgressQuery, 1000);
        //}
        //})
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

const $ = require('jquery');
import React from 'react';

import SettingBox from './crawler_setting.js';
import LogBox from './crawler_logs.js';
import PureRenderMixin from 'react-addons-pure-render-mixin';

let timer;

let CrawlerBox = React.createClass({
    mixins: [PureRenderMixin],

    getDefaultProps(){
        return {
            setting: {},
            filePath: ''
        }
    },

    getInitialState(){
        return {
            buildProgress: 0,
            testcaseProgress: 0,
            copProgress: 0,
            isGenerated: false
        };
    },

    handleProgressQuery(){
        fetch("/crawler/progress_query", {
            method: "POST"
        }).then((res)=> {
            return res.json();
        }).then((json)=> {

            let {buildProgress,testcaseProgress,copProgress} = json;

            this.setState({
                buildProgress: buildProgress,
                testcaseProgress: testcaseProgress,
                copProgress: copProgress,
                isGenerated: false
            });

            if (json.status) {
                clearInterval(timer);
                this.setState({
                    buildProgress: buildProgress,
                    testcaseProgress: testcaseProgress,
                    copProgress: copProgress,
                    isGenerated: true
                });
            }
        })
    },

    handleStart(){
        fetch("/crawler/start_job", {
            method: "POST"
        }).then((res)=> {
            return res.json();
        }).then((json)=> {
            if (json.status) {
                //TODO　实现crawler成功运行后的后续过程
                console.log('success')
            }
            else {
                if (json.message) {
                    alert(json.message);
                }
                clearInterval(timer)
            }
        });

        this.setState({
            buildProgress: 0,
            testcaseProgress: 0,
            copProgress: 0,
            isGenerated: false
        });

        timer = setInterval(this.handleProgressQuery, 2000);
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
                <LogBox buildProgress={this.state.buildProgress}
                        testcaseProgress={this.state.testcaseProgress}
                        copProgress={this.state.copProgress}
                        isGenerated={this.state.isGenerated}
                        filePath={this.props.filePath}/>
            </div>
        );
    }
});

module.exports = CrawlerBox;

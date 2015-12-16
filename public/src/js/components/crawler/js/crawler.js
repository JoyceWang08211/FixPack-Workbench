const $ = require('jquery'), React = require('react'), ReactDOM = require('react-dom');

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
            isGenerated: false,
            logContent: []
        };
    },

    handleProgressQuery(){
        fetch("/crawler/progress_query", {
            method: "POST"
        }).then((res)=> {
            return res.json();
        }).then((json)=> {

            let {buildProgress,testcaseProgress,copProgress,logContent} = json;

            if (json.status)
                clearInterval(timer);

            this.setState({
                buildProgress: buildProgress,
                testcaseProgress: testcaseProgress,
                copProgress: copProgress,
                isGenerated: json.status ? true : false,
                logContent: logContent
            });
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
                    console.log(json.message);
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
                <SettingBox setting={this.props.setting} handleStart={this.handleStart}/>
                <LogBox buildProgress={this.state.buildProgress}
                        testcaseProgress={this.state.testcaseProgress}
                        copProgress={this.state.copProgress}
                        isGenerated={this.state.isGenerated}
                        filePath={this.props.filePath}
                        logContent={this.state.logContent}/>
            </div>
        );
    }
});

module.exports = CrawlerBox;

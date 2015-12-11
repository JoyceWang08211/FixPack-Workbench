const $ = require('jquery');
import React from 'react';
import createFragment from 'react-addons-create-fragment';

let CrawlerHistoryBox = React.createClass({
    handleSyncAction(){
        fetch('/crawler/get_history')
            .then((res)=> {
                return res.json()
            })
            .then((json)=> {
                this.setState({
                    fileList: json.fileList
                })
            });
    },

    getInitialState(){
        return {
            fileList: this.props.fileList || []
        };
    },

    render(){
        let children = this.state.fileList.map((file)=> {
            return createFragment({
                file: <li>{file}</li>
            })
        })

        return (
            <div>
                <ul>
                    {children}
                </ul>
                <button className='btn btn-primary btn-block' onClick={this.handleSyncAction}>Sync</button>
            </div>)
    }
});

module.exports = CrawlerHistoryBox;
const $ = require('jquery');
import React from 'react';

import {Circle} from 'react-progressbar.js';

let LogBox = React.createClass({
    getDefaultProps(){
        return {
            isGenerated: false,
            buildProgress: 0,
            testcaseProgress: 0,
            copProgress: 0,
            filePath: '',
            logContent: ''
        };
    },

    render() {
        let options = {
            color: '#FCB03C',
            strokeWidth: 3,
            trailWidth: 1,
            duration: 3000,
            text: {
                value: '0'
            },
            step: function (state, bar) {
                bar.setText(`${(bar.value() * 100).toFixed(0)}%`);
            }
        };

        return (
            <div className='col-xs-7'>
                <div className='row'>
                    <div className='col-xs-12'>
                        <div className='row'>
                            <div className={this.props.isGenerated?'success-show':'success-hide'}>
                                <p className="bg-success">The Result File has been generated successfully..Click <a
                                    href={`/data/${this.props.filePath}`}>Here</a> to download..</p>
                            </div>
                        </div>
                        <div className='row'>
                            <h3>Crawler Progress</h3>

                            <div className='col-xs-4'>
                                <p className='text-center'>Build Progress</p>
                                <Circle
                                    progress={this.props.buildProgress}
                                    options={options}
                                    initialAnimate={true}
                                    containerClassName={'progressbar'}
                                    />
                            </div>
                            <div className='col-xs-4'>
                                <p className='text-center'>Testcase Progress</p>
                                <Circle
                                    progress={this.props.testcaseProgress}
                                    options={options}
                                    initialAnimate={true}
                                    containerClassName={'progressbar'}
                                    />
                            </div>
                            <div className='col-xs-4'>
                                <p className='text-center'>COP Progress</p>
                                <Circle
                                    progress={this.props.copProgress}
                                    options={options}
                                    initialAnimate={true}
                                    containerClassName={'progressbar'}
                                    />
                            </div>
                        </div>
                        <div className='row'>
                            <h3>Logs</h3>

                            <div className='col-xs-'>
                                <p>{this.props.logContent}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = LogBox;
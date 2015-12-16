const $ = require('jquery'), React = require('react'), ReactDOM = require('react-dom');

import {Circle} from 'react-progressbar.js';
import createFragment from 'react-addons-create-fragment';

let LogBox = React.createClass({
    getDefaultProps(){
        return {
            isGenerated: false,
            buildProgress: 0,
            testcaseProgress: 0,
            copProgress: 0,
            filePath: '',
            logContent: []
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

        let logTableList = [];

        for (let log of this.props.logContent) {
            let _html = createFragment({
                logEntry: (
                    <tr>
                        <td>{log[0]}</td>
                        <td>{log[1]}</td>
                        <td>{log[2]}</td>
                        <td>{log[3]}</td>
                    </tr>)
            });

            logTableList.push(_html);
        }

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
                            <h3>Crawler Logs</h3>
                            <table className='col-xs-12 table table-striped'>
                                <thead>
                                <tr>
                                    <th>Component Name</th>
                                    <th>Build Num</th>
                                    <th>Total</th>
                                    <th>Failure</th>
                                </tr>
                                </thead>
                            </table>
                            <div className='col-xs-12 log-panel'>
                                <table className='table table-striped'>
                                    <tbody>
                                    {logTableList}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = LogBox;
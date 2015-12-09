const $ = require('jquery');
import React from 'react';

import {Circle} from 'react-progressbar.js';

let LogBox = React.createClass({
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
                bar.setText((bar.value() * 100).toFixed(0));
            }
        };

        return (
            <div className='col-xs-7'>
                <div className='row'>
                    <div className='col-xs-12'>
                        <Circle
                            progress={this.props.progress}
                            text={'progressbar'}
                            options={options}
                            initialAnimate={true}
                            containerClassName={'.progressbar'}
                            />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = LogBox;
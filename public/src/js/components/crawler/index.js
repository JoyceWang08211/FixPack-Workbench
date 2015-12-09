const $ = require('jquery');
import React from 'react';
import ReactDOM from 'react-dom';

import CrawlerBox from './js/crawler';

$(()=> {
    fetch('/crawler/get_setting')
        .then((res)=> {
            return res.json();
        })
        .then((json)=> {
            const setting = JSON.parse(json);
            ReactDOM.render(<CrawlerBox setting={setting}/>, document.getElementById('crawler'));
        });

});

//css
require('./css/crawler.css');
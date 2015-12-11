const $ = require('jquery');
import React from 'react';
import ReactDOM from 'react-dom';

import CrawlerBox from './js/crawler';
import HistoryBox from './js/crawler_history';

$(()=> {
    fetch('/crawler/get_setting')
        .then((res)=> {
            return res.json();
        })
        .then((json)=> {
            const setting = JSON.parse(json);
            const filePath = `${setting.fixpack_info.name}-build${setting.fixpack_info.build}.xlsx`;

            ReactDOM.render(<CrawlerBox setting={setting} filePath={filePath}/>, document.getElementById('crawler'));
        });

    fetch('/crawler/get_history')
        .then((res)=> {
            return res.json();
        })
        .then((json)=> {
            ReactDOM.render(<HistoryBox fileList={json.fileList}/>, document.getElementById('crawler-history'));
        });

});

//css
require('./css/crawler.css');
require('./css/crawler_logs.css');
require('./css/crawler_history.css');
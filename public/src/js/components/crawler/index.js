import CrawlerBox from './js/crawler';
import ComparatorBox from './js/comparator.js';
import Evaluator from './js/evaluator.js';

const $ = require('jquery'), React = require('react'), ReactDOM = require('react-dom');

$(()=> {
    $('#crawler_nav').find('a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

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
            ReactDOM.render(<ComparatorBox/>, document.getElementById('comparator'));
        });
});

if (module.hot) {
    module.hot.accept();
}

//css
require('./css/crawler.css');
require('./css/crawler_logs.css');

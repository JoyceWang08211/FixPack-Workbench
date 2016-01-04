import CrawlerBox from './js/crawler'
import ComparatorBox from './js/comparator.js'
import Evaluator from './js/evaluator.js'
import {Tabs, Tab} from 'react-bootstrap'

const $ = require('jquery'), React = require('react'), ReactDOM = require('react-dom');

let p1 = fetch('/crawler/get_setting')
    .then((res)=> {
        return res.json();
    })
    .then((json)=> {
        let obj = JSON.parse(json);

        return {
            setting: obj,
            filePath: `${obj.fixpack_info.name}-build${obj.fixpack_info.build}.xlsx`
        }
    });

let p2 = fetch('/crawler/get_history')
    .then((res)=> {
        return res.json();
    })
    .then((json)=> {

        return {history: json}
    });

Promise.all([p1, p2])
    .then(results=> {
        const [{setting,filePath}, {history}]=results;

        const TabsInstance = (
            <Tabs defaultActiveKey={1}>
                <Tab eventKey={1} title="Crawler">
                    <CrawlerBox setting={setting} filePath={filePath}/>
                </Tab>
                <Tab eventKey={2} title="Comparator">
                    <ComparatorBox/>
                </Tab>
                <Tab eventKey={3} title="Evaluator">Tab 3 content</Tab>
            </Tabs>
        );

        ReactDOM.render(TabsInstance, document.querySelector('#app'));
    });

if (module.hot) {
    module.hot.accept();
}

//css
require('./css/crawler.css');
require('./css/crawler_logs.css');

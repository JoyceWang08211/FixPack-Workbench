const $ = require('jquery'), React = require('react'), ReactDOM = require('react-dom');

import {Tabs, Tab} from 'react-bootstrap'
import RecordBox from '../ui/recorder.js'

const TabsInstance = (
    <Tabs defaultActiveKey={1}>
        <Tab eventKey={1} title="Record">
            <RecordBox/>
        </Tab>
        <Tab eventKey={2} title="Summary">Tab 3 content</Tab>
    </Tabs>
);

module.exports = TabsInstance;

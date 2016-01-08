const $ = require('jquery'), React = require('react'), ReactDOM = require('react-dom');

require('babel-polyfill');

import { Provider } from 'react-redux';
import Root from './containers/Root.js';
import configureStore from './store/configureStore';
import {fetchLists} from './actions/plannerAction.js'

const store = configureStore();

//store.dispatch(fetchLists('Jan')).then(()=> {
//    //console.log(store.getState())
//})

require('./ui/css/recorder.css')

ReactDOM.render(
    <Root store={store}/>
    , document.querySelector('#app'));

if (module.hot) {
    module.hot.accept();
}
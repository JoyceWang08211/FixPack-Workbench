const $ = require('jquery'), React = require('react'), ReactDOM = require('react-dom');

require('babel-polyfill');

import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
import {fetchLists} from './actions/plannerAction.js'

const store = configureStore();

//store.dispatch(fetchLists('Jan')).then(()=> {
//    //console.log(store.getState())
//})

require('./ui/css/recorder.css')

ReactDOM.render(
    <Provider store={store}>
        <App dispatch={store.dispatch}/>
    </Provider>
    , document.querySelector('#app'));

if (module.hot) {
    module.hot.accept();
}
const $ = require('jquery'), React = require('react'), ReactDOM = require('react-dom');

import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';

if (module.hot) {
    module.hot.accept();
}

const store = configureStore();

require('./ui/css/recorder.css')

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('#app'));


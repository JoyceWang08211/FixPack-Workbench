import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import createLogger from 'redux-logger'
import rootReducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(
    thunk
    //createLogger()
)(createStore)

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState)

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default
            store.replaceReducer(nextReducer)
        })
    }

    return store
}

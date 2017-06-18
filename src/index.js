import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'

import App from './components/App';
import mainReducers from './reducers';

const store = createStore(
    mainReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
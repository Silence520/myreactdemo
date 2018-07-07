// import React from 'react';
// import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from './store/index.js';
import Rootrouter from './router/index';
const middleware = [thunk];
const store = createStore(configureStore, applyMiddleware(...middleware));

ReactDOM.render(
 <Provider store={store}>
  <Rootrouter />
 </Provider>,
 document.getElementById('app')
);

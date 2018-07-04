import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './store/index.js';
const middleware = [thunk];
const store = createStore(configureStore, applyMiddleware(...middleware));
import Rootrouter from './router/index';

ReactDom.render(
 <Provider store={store}>
  <Rootrouter />
 </Provider>,
 document.getElementById('app')
);

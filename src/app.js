import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './store/index.js';

const store = createStore(configureStore);

import Home from './views/home/index';

ReactDom.render(
 <Provider store={store}>
  <Home />
 </Provider>,
 document.getElementById('app')
);

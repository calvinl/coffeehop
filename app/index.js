import 'babel/polyfill';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import rootReducer from './reducers';

let store = createStore(rootReducer);
let rootElement = document.getElementById('app');

React.render(
  // The child must be wrapped in a function
  // to work around an issue in React 0.13.
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  rootElement
);

import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { increment } from './reducers/increment';

import App from './App';

import './styles/main.scss';

const store = createStore(combineReducers({ increment }));

store.subscribe(() => {
  console.log(store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import myAppStore from './store';

export default function configureStore() {
  const middlewares = [];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(myAppStore, applyMiddleware(...middlewares));
}

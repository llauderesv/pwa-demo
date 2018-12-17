// import this polyfill to make our sagas work
import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import myStore from './store';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const middlewares = [sagaMiddleware];
  const env = process.env.NODE_ENV.trim();

  if (env !== 'production') {
    middlewares.push(createLogger());
  }

  const store = createStore(myStore, applyMiddleware(...middlewares));

  // Apply the saga middleware
  sagaMiddleware.run(rootSaga); 

  return store;
}

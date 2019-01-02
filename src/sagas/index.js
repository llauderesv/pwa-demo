import { all } from 'redux-saga/effects';

import signIn from './signIn';

export default function* rootSaga() {
  yield all([signIn()]);
}

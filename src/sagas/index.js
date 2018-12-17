import { delay } from 'redux-saga';
import { put, takeEvery, all, takeLatest } from 'redux-saga/effects';

function* watchUsersLogin() {
  yield takeLatest('LOGIN_USER', loginUserAsync);
}

function* loginUserAsync() {
  // put some 3 sec. delay before dispatching another action
  // yield put({
  //   type: 'FETCH_ACCESS_TOKEN_SUCCESS',
  //   payload: {
  //     isLoading: false,
  //     isLoggedIn: true,
  //   },
  // });
  yield put({
    type: 'FETCH_ACCESS_TOKEN_REQUEST',
    payload: {
      isLoading: true,
    },
  });
  yield delay(3000);
  yield put({
    type: 'FETCH_ACCESS_TOKEN_FAILED',
    payload: {
      isLoading: false,
      message: 'Something went wrong',
    },
  });
  yield put({
    type: 'SHOW_ALERT',
    payload: {
      show: true,
      type: 'danger',
    },
  });
}

export default function* rootSaga() {
  yield all([watchUsersLogin()]);
}

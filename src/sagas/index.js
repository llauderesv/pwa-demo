import { delay } from 'redux-saga';
import { put, takeEvery, all, takeLatest } from 'redux-saga/effects';

function* loginUserAsync() {
  // create and yield a dispatch Effect
  yield put({
    type: 'FETCH_ACCESS_TOKEN_REQUEST',
    payload: {
      isLoading: true,
    },
  });
  // put some 3 sec. delay before dispatching another action
  yield delay(3000);
  yield put({
    type: 'FETCH_ACCESS_TOKEN_SUCCESS',
    payload: {
      isLoading: false,
      isLoggedIn: true,
    },
  });
  // yield put({
  //   type: 'FETCH_ACCESS_TOKEN_FAILED',
  //   payload: {
  //     isLoading: false,
  //     message: 'Something went wrong',
  //   },
  // });
}

function* watchUsersLogin() {
  yield takeLatest('LOGIN_USER', loginUserAsync);
}

export default function* rootSaga() {
  yield all([watchUsersLogin()]);
}

import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';

function* loginUserAsync() {
  yield put({
    type: 'FETCH_ACCESS_TOKEN_REQUEST',
    payload: {
      isLoading: true,
    },
  });
  yield delay(3000);
  // yield put({
  //   type: 'FETCH_ACCESS_TOKEN_SUCCESS',
  //   payload: {
  //     isLoading: false,
  //     isLoggedIn: true,
  //   },
  // });
  yield put({
    type: 'FETCH_ACCESS_TOKEN_FAILED',
    payload: {
      isLoading: false,
      message: 'Something went wrong',
    },
  });
}

function* watchUsersLogin() {
  yield takeEvery('LOGIN_USER', loginUserAsync);
}

export default function* rootSaga() {
  yield all([watchUsersLogin()]);
}

import { delay } from 'redux-saga';
import { put, takeLatest, call } from 'redux-saga/effects';
import { signIn } from '../service/authService';

function* signInUser({ email_address, password }) {
  try {
    yield delay(1000);
    const user = yield call(signIn, email_address, password);
    yield put({ type: 'SIGNED_IN_SUCCESS', payload: user.data });
  } catch (error) {
    const { response } = error;
    if (response && response.data) {
      yield put({
        type: 'SIGNED_IN_FAILED',
        payload: { message: response.data.message, alertType: 'warning' },
      });
    } else {
      yield put({
        type: 'SIGNED_IN_FAILED',
        payload: {
          message: 'Something went wrong. Please try again.',
          alertType: 'danger',
        },
      });
    }
  }
}

function* signInUserAsync({ payload }) {
  yield signInUser(payload);
}

export default function* watchUsersSignIn() {
  yield takeLatest('USER_SIGN_IN', signInUserAsync);
}

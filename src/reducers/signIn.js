import app from '../config';
import { saveToken } from '../localStorage';

const initialState = {
  data: null,
  message: null,
  isSigning: false,
  showAlert: false,
  alertType: 'default',
};

const signIn = (state = initialState, action) => {
  if (!action) return state;

  switch (action.type) {
    case 'USER_SIGN_IN':
      return { ...state, isSigning: action.payload.isSigning };
    case 'SIGNED_IN_FAILED':
      return {
        ...state,
        showAlert: true,
        alertType: action.payload.alertType,
        message: action.payload.message,
        isSigning: false,
      };
    case 'SIGNED_IN_SUCCESS':
      const { message, data } = action.payload;

      window.location.href = `${app.baseURL}todo`;
      saveToken(data.token);

      return {
        ...state,
        message,
        data,
        showAlert: true,
        alertType: 'success',
        isSigning: false,
      };
    case 'HIDE_ALERT':
      return { ...state, showAlert: false };
    default:
      return state;
  }
};

export default signIn;

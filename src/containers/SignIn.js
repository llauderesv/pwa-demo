import { connect } from 'react-redux';

import SignIn from '../components/SignIn';

const mapStateToProps = state => {
  const { message, alertType, isSigning, showAlert } = state.signIn;

  return {
    message,
    alertType,
    isSigning,
    showAlert,
  };
};

const mapDispatchToProps = dispatch => ({
  handleClickSignIn(email_address, password) {
    dispatch({
      type: 'USER_SIGN_IN',
      payload: { email_address, password, isSigning: true },
    });
  },
  handleHideAlert() {
    dispatch({ type: 'HIDE_ALERT' });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

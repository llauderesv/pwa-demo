import { connect } from 'react-redux';

import Login from '../components/Login';

const mapStateToProps = state => {
  const { isLoading, message, isLoggedIn } = state.player;
  const { show } = state.alert;

  return {
    isLoading,
    isLoggedIn,
    message,
    alertState: show,
  };
};

const mapDispatchToProps = dispatch => ({
  onClick(username, password) {
    dispatch({ type: 'LOGIN_USER' });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

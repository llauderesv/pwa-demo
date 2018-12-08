import { connect } from 'react-redux';

import Login from '../components/Login';

const mapStateToProps = state => {
  const { isLoading, errorMessage, isLoggedIn } = state.player;

  return {
    isLoading: isLoading,
    errorMessage: errorMessage,
    isLoggedIn: isLoggedIn,
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

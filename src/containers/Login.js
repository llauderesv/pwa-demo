import { connect } from 'react-redux';
import { login } from '../actions/player';

import Login from '../components/Login';

const mapStateToProps = state => ({
  isLoading: state.player.isLoading,
  errorMessage: state.player.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  onClick(username, password) {
    dispatch({ type: 'LOGIN_USER' });
  },
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;

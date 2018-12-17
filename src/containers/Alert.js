import { connect } from 'react-redux';

import Alert from '../components/Alert';

const mapStateToProps = state => {
  const { message } = state.player;
  const { type } = state.alert;

  return { message, type };
};

const mapDispatchToProps = dispatch => ({
  onClick() {
    dispatch({ type: 'HIDE_ALERT' });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alert);

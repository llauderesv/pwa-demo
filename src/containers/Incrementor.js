import { connect } from 'react-redux';
import Incrementor from '../components/Incrementor';

const mapIncrementorDispatchToProps = distpatch => {
  return {
    onIncrement: _ => {
      distpatch({ type: 'INC' });
    },
    onDecrement: _ => {
      distpatch({ type: 'DEC' });
    },
  };
};

const mapIncrementorStateToProps = state => {
  return {
    value: state.increment,
  };
};

export default connect(
  mapIncrementorStateToProps,
  mapIncrementorDispatchToProps
)(Incrementor);

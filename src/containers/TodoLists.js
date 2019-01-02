import { connect } from 'react-redux';

import TodoLists from '../components/TodoLists';

const mapStateToProps = state => {
  const { todos } = state;

  return { todos };
};

export default connect(
  mapStateToProps,
  null
)(TodoLists);

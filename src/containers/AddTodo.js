import { connect } from 'react-redux';
import { addTodo } from '../actions/todoAction';

import AddTodo from '../components/AddTodo';

const mapDispatchToProps = dispatch => ({
  handleAddTodo(title, desc) {
    dispatch(addTodo(title, desc));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);

import React from 'react';

import withConnectionState from '../ConnectionState';
import AddTodo from '../../containers/AddTodo';
import TodoLists from '../../containers/TodoLists';
import Header from '../Header';

const TodoApp = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="todo-app">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <AddTodo />
            </div>
            <div className="col-md-8">
              <TodoLists />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withConnectionState(TodoApp);

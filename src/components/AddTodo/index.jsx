import React from 'react';

import Button from '../Button';
import TextField from '../TextField';
import TextArea from '../TextArea';

import './index.scss';

const AddTodo = ({ handleAddTodo }) => {
  let todoTitleRef, todoDescription;

  function handleEventAddTodo() {
    if (!todoTitleRef.value || !todoDescription.value) {
      todoTitleRef.focus();
      return;
    }

    handleAddTodo(todoTitleRef.value, todoDescription.value);

    todoTitleRef.value = '';
    todoDescription.value = '';
    todoTitleRef.focus();
  }

  return (
    <React.Fragment>
      <div className="form-group">
        <TextField
          ref={node => (todoTitleRef = node)}
          placeholder="Title"
          className="form-control"
          name="title"
        />
      </div>
      <div className="form-group">
        <TextArea
          ref={node => (todoDescription = node)}
          name="todo"
          rows="5"
          placeholder="Description"
        />
      </div>
      <div className="form-group">
        <Button
          style={{ float: 'right', fontWeight: '700' }}
          className="btn-primary btn-lg"
          onClick={handleEventAddTodo}
        >
          Add Todo
        </Button>
      </div>
    </React.Fragment>
  );
};

export default AddTodo;

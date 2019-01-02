import React from 'react';

import TodoItem from '../TodoItem';

import './index.scss';

const TodoLists = ({ todos }) => {
  const todoLists = todos.map((todo, id) => {
    return <TodoItem key={todo.id} itemId={id + 1} {...todo} />;
  });

  return <div className="todo-lists">{todoLists}</div>;
};

export default TodoLists;

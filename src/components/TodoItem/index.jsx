import React from 'react';

const TodoItem = ({ itemId, title, desc }) => {
  return (
    <div className="card bg-light mb-3">
      <div className="card-header">Todo Item {itemId}</div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default TodoItem;

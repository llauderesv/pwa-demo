import uuid from 'uuid';

const addTodo = (title, desc) => ({
  type: 'ADD_TODO',
  payload: {
    id: uuid.v4(),
    title,
    desc,
  },
});

export { addTodo };

import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeHandler, updateHandler }) => (
  <div>
    {todos.map((t, i) => (
      <TodoItem key={i} todo={t} removeHandler={removeHandler} updateHandler={updateHandler} />
    ))}
  </div>
);

export default TodoList;

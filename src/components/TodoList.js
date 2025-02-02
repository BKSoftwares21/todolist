import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeHandler, updateHandler, editHandler }) => (
  <div>
    {todos.map((t, i) => (
      <TodoItem
        key={i}
        todo={t}
        removeHandler={removeHandler}
        updateHandler={updateHandler}
        editHandler={editHandler}
      />
    ))}
  </div>
);

export default TodoList;

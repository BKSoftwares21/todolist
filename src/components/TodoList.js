import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeHandler }) => (
    <div>
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} removeHandler={removeHandler} />
      ))}
    </div>
  );
  
  export default TodoList;
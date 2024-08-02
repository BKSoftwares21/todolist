import React from 'react';
import '../css/TodoItem.module.css';

const TodoItem = ({ todo, removeHandler, updateHandler }) => (
  <div>
    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</span>
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => updateHandler(todo.id)}
      data-testid={`checkbox-${todo.id}`}
    />
    <button data-testid={`close-btn-${todo.id}`} onClick={() => removeHandler(todo.id)}>
      Remove
    </button>
  </div>
);

export default TodoItem;

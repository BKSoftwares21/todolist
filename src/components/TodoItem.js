import React from 'react';
import styles from '../css/TodoItem.module.css'; 
const TodoItem = ({ todo, removeHandler }) => (
    <div>
      <span>{todo.title}</span>
      <button data-testid={`close-btn-${todo.id}`} onClick={() => removeHandler(todo.id)}>
        Remove
      </button>
    </div>
  );
  
  export default TodoItem;
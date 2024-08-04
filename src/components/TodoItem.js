import React from 'react';
import styles from '../css/TodoItem.module.css';

const TodoItem = ({ todo, removeHandler, updateHandler }) => (
  <div className={styles['todo-item']}>
    <span className={styles['todo-title']} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.title}
    </span>
    <input
      className={styles['checkbox']}
      type="checkbox"
      checked={todo.completed}
      onChange={() => updateHandler(todo.id)}
      data-testid={`checkbox-${todo.id}`}
    />
    <button className={styles['remove-button']} data-testid={`close-btn-${todo.id}`} onClick={() => removeHandler(todo.id)}>
      &times;
    </button>
  </div>
);

export default TodoItem;

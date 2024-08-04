import React, { useState } from 'react';
import styles from '../css/TodoItem.module.css';

const TodoItem = ({ todo, removeHandler, updateHandler, editHandler }) => {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEditClick = () => {
    if (editMode) {
      editHandler(todo.id, newTitle);
    }
    setEditMode(!editMode);
  };

  return (
    <div className={styles['todo-item']}>
      {editMode ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <span
          className={styles['todo-title']}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.title}
        </span>
      )}
      <input
        className={styles['checkbox']}
        type="checkbox"
        checked={todo.completed}
        onChange={() => updateHandler(todo.id)}
        data-testid={`checkbox-${todo.id}`}
      />
      <button
        className={styles['edit-button']}
        onClick={handleEditClick}
        data-testid={`edit-btn-${todo.id}`}
      >
        {editMode ? 'Save' : 'Edit'}
      </button>
      <button
        className={styles['remove-button']}
        data-testid={`close-btn-${todo.id}`}
        onClick={() => removeHandler(todo.id)}
      >
        &times;
      </button>
    </div>
  );
};

export default TodoItem;

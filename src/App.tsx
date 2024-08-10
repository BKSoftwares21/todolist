import React, { useState, ChangeEvent, FormEvent } from 'react';
import TodoList from './components/TodoList';
import './App.css';
import { Todo } from './components/TodoItem';
import { TodoItemProps } from './components/TodoItem';




function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [saving, setSaving] = useState<boolean>(false);

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    setSaving(true);
    const newTodoItem: Todo = {
      id: Math.random().toString(36).substr(2, 9),
      title: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
    setSaving(false);
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id: string): void => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const editTodoTitle = (id: string, newTitle: string): void => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, title: newTitle } : todo));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="App">
    <h1 className="header">My Todo List</h1>
    {loading ? 'Loading' : <TodoList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} editTodoTitle={editTodoTitle} />}

    <div className="add-todo-form">
      {saving ? (
        'Saving'
      ) : (
        <form onSubmit={addTodo}>
          <label htmlFor="new-todo">New Todo</label>
          <input
            id="new-todo"
            type="text"
            value={newTodo}
            onChange={handleChange}
            placeholder="Enter new todo"
          />
          <button type="submit">Add new todo</button>
        </form>
      )}
    </div>
  </div>
  );
};

export default App;

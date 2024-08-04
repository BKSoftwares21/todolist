import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    // Simulate fetch call to get initial todo items
    setTimeout(() => {
      setTodos([
        { userId: 1, id: 1, title: 'Eat breakfast', completed: false },
        { userId: 1, id: 2, title: 'Do laundry', completed: false },
        { userId: 1, id: 3, title: 'Take out the trash', completed: false }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // Function to remove a todo item by id
  function removeTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  // Function to update a todo item's completed status by id
  function updateTodo(id) {
    const newList = todos.map((todoItem) => {
      if (todoItem.id === id) {
        const updatedItem = { ...todoItem, completed: !todoItem.completed };
        return updatedItem;
      }
      return todoItem;
    });
    setTodos(newList);
  }

  // Function to update a todo item's title by id
  function editTodoTitle(id, newTitle) {
    const newList = todos.map((todoItem) => {
      if (todoItem.id === id) {
        const updatedItem = { ...todoItem, title: newTitle };
        return updatedItem;
      }
      return todoItem;
    });
    setTodos(newList);
  }

  // Function to handle adding a todo item
  const addTodo = (e) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      const newId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
      setTodos([...todos, { userId: 1, id: newId, title: newTodo, completed: false }]);
      setNewTodo('');
      setSaving(false);
    }, 500);
  };

  // Function to handle input change
  const onChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="App">
      <h1 className="header">My todo list</h1>
      {loading ? 'Loading' : <TodoList todos={todos} removeHandler={removeTodo} updateHandler={updateTodo} editHandler={editTodoTitle} />}

      <div className="add-todo-form">
        {saving ? (
          'Saving'
        ) : (
          <form onSubmit={addTodo}>
            <input type="text" value={newTodo} onChange={onChange} />
            <button type="submit">Add new todo</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;

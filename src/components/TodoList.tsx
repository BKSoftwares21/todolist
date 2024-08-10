import React from 'react';
import TodoItem from './TodoItem';
import { TodoItemProps } from './TodoItem';
import { Todo } from './TodoItem';
const styles = require ('../css/TodoItem.module.css');

interface TodoListProps{
  todos: Todo[],
  removeTodo: (id:string)=> void, 
  updateTodo:(id:string)=> void, 
  editTodoTitle: (id:string, newTitle:string) => void
}

const TodoList = ({ todos, removeTodo, updateTodo, editTodoTitle }: TodoListProps) => (
  <div>
    {todos.map((todo: Todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        editTodoTitle={editTodoTitle}
      />
    ))}
  </div>
);

export default TodoList;

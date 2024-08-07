import React from 'react';
import TodoItem from './TodoItem';
import { TodoItemProps } from './TodoItem';
import { Todo } from './TodoItem';



const TodoList = ({ removeTodo, updateTodo, editTodoTitle }: TodoItemProps) => (
  <div>
    {todo.map((todo: Todo) => (
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

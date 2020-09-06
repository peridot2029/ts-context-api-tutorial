import React from 'react';
import TodoItem from './TodoItem';
import { useTodosState } from '../context/TodosContext';

function TodoList() {
  const todos = useTodosState();
  console.log(todos);
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;

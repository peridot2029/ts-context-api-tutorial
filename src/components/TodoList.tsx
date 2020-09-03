import React from 'react';
import TodoItem from './TodoItem';
function TodoList() {
  const todos = [
    {
      id: 1,
      text: 'Context API',
      done: true,
    },
    {
      id: 2,
      text: 'TypeScript API',
      done: false,
    },
    {
      id: 3,
      text: 'TypeScript 와 Context ApI 함께 사용',
      done: false,
    },
  ];

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;

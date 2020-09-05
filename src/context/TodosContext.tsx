import { createContext } from 'react';

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodoState = Todo[];

const TodoStateContext = createContext<TodoState | undefined>(undefined);

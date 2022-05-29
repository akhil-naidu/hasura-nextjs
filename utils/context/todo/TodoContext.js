import React, { createContext, useContext } from 'react';

const todoContext = createContext();

export const useTodoContext = () => {
  return useContext(todoContext);
};

const TodoContextProvider = ({ children }) => {
  const value = {
    data: [
      {
        id: 1,
        task: 'Learn ReactJS',
        completed: false,
      },
      {
        id: 2,
        task: 'Learn NextJS',
        completed: false,
      },
      {
        id: 3,
        task: 'Learn Hasura',
        completed: false,
      },
    ],
  };

  return <todoContext.Provider value={value}>{children}</todoContext.Provider>;
};

export default TodoContextProvider;

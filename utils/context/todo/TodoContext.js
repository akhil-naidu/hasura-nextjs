import React, { useState, useEffect, createContext, useContext } from 'react';
import { useQuery } from 'urql';

import { GetAllTodosGQL } from '@/graphql/todo';

const todoContext = createContext();

export const useTodoContext = () => {
  return useContext(todoContext);
};

const TodoContextProvider = ({ children }) => {
  const [allTodos, getAllTodos] = useQuery({
    query: GetAllTodosGQL,
  });

  const [todoList, setTodoList] = useState([]);
  const [editingTodo, setEditingTodo] = useState({
    status: false,
    id: null,
  });

  const adminData = {
    allFields: [
      {
        id: 1,
        label: null,
        placeholder: 'Enter your To Do',
        type: 'text',
        name: 'task',
      },
    ],
    initialValues: {
      task: '',
    },
    defaultValues: {
      completed: false,
    },
    moreInfo: {
      task: {
        required: 'Task Cannot be empty',
      },
    },
  };

  const value = {
    todoList,
    setTodoList,
    editingTodo,
    setEditingTodo,
    ...adminData,
  };

  useEffect(() => {
    if (!allTodos.fetching && !allTodos.error) {
      setTodoList(allTodos.data.todos);
    }
  }, [allTodos]);

  return <todoContext.Provider value={value}>{children}</todoContext.Provider>;
};

export default TodoContextProvider;

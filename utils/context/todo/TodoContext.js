import React, { useState, useEffect, createContext, useContext } from 'react';
import * as yup from 'yup';

const todoContext = createContext();

export const useTodoContext = () => {
  return useContext(todoContext);
};

const TodoContextProvider = ({ children }) => {
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

  // const arrayOfValidations = adminData.allFields.map(({ name }) => ({
  //   [name]: yup.string().required(adminData.moreInfo[`${name}`].required),
  // }));

  // const validationSchema = yup.object().shape(...arrayOfValidations);

  const value = {
    todoList,
    setTodoList,
    editingTodo,
    setEditingTodo,
    ...adminData,
    // validationSchema,
  };

  useEffect(() => {
    const data = [
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
    ];

    setTodoList(data);
  }, []);
  return <todoContext.Provider value={value}>{children}</todoContext.Provider>;
};

export default TodoContextProvider;

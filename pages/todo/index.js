import React from 'react';
import TodoApp from '@/components/todo/TodoApp';

import TodoContextProvider from '@/utils/context/todo/TodoContext';

const TodoIndex = () => {
  return (
    <TodoContextProvider>
      <TodoApp />
    </TodoContextProvider>
  );
};

export default TodoIndex;

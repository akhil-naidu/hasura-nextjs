import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import TodoApp from '@/components/todo/TodoApp';
import { useAuthStore } from '@/utils/store';
import TodoContextProvider from '@/utils/context/todo/TodoContext';

const TodoIndex = () => {
  const router = useRouter();
  const loggedInUser = useAuthStore((state) => state.loggedInUser);

  useEffect(() => {
    if (!loggedInUser) {
      router.push('/login');
    }
  }, [loggedInUser, router]);

  return (
    <TodoContextProvider>{loggedInUser && <TodoApp />}</TodoContextProvider>
  );
};

export default TodoIndex;

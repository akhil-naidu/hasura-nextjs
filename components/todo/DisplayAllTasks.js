import React from 'react';
import IndividualTask from './IndividualTask';

import { useTodoContext } from '@/utils/context/todo/TodoContext';

const DisplayAllTasks = () => {
  const { data } = useTodoContext();

  return (
    <>
      {data.map((todo) => (
        <IndividualTask key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default DisplayAllTasks;

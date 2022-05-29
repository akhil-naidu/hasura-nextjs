import React from 'react';
import IndividualTask from './IndividualTask';

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

const DisplayAllTasks = () => {
  return (
    <>
      {data.map((todo) => (
        <IndividualTask key={todo.id} task={todo.task} />
      ))}
    </>
  );
};

export default DisplayAllTasks;

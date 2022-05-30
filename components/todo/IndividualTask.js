import { IconButton, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { MdDeleteForever, MdEdit, MdOutlineDoneAll } from 'react-icons/md';
import { useField } from 'formik';
import { useMutation } from 'urql';

import { useTodoContext } from '@/utils/context/todo/TodoContext';
import { DeleteTodoGQL } from '@/graphql/todo';

const IndividualTask = ({ todo }) => {
  const [deleteTodoMutationResult, deleteTodoMutation] =
    useMutation(DeleteTodoGQL);

  const { todoList, setTodoList, editingTodo, setEditingTodo } =
    useTodoContext();

  const [{}, {}, { setValue }] = useField({ name: 'task' });

  const editTask = (todo) => {
    setEditingTodo({
      status: true,
      id: todo.id,
    });

    setValue(todo.task);
  };

  const deleteTask = async (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);

    const variables = { id };
    const { data } = await deleteTodoMutation(variables);
    console.log(data);

    setTodoList(newTodoList);
  };

  return (
    <HStack
      justify='space-between'
      className='m-2 rounded-md bg-slate-100 py-2 px-4 shadow-md'
    >
      <Text className='hover:cursor-pointer'>{todo.task}</Text>
      <HStack>
        <IconButton
          onClick={() => editTask(todo)}
          colorScheme='blue'
          icon={<MdEdit />}
          isRound
          disabled={editingTodo.status}
        />
        <IconButton
          onClick={() => deleteTask(todo.id)}
          colorScheme='red'
          icon={<MdDeleteForever />}
          isRound
          disabled={editingTodo.status}
        />
      </HStack>
    </HStack>
  );
};

export default IndividualTask;

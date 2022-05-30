import React from 'react';
import { Button, Container, HStack, useToast } from '@chakra-ui/react';
import { Formik } from 'formik';
import { useMutation } from 'urql';

import FormikInput from '../shared/FormikInput';
import DisplayAllTasks from './DisplayAllTasks';
import { useTodoContext } from '@/utils/context/todo/TodoContext';
import { AddTodoGQL, UpdateTodoGQL } from '@/graphql/todo';

const TodoApp = () => {
  const toast = useToast();
  const [addTodoMutationResult, addTodoMutation] = useMutation(AddTodoGQL);
  const [updateTodoMutationResult, updateTodoMutation] =
    useMutation(UpdateTodoGQL);

  const {
    todoList,
    setTodoList,
    allFields,
    initialValues,
    editingTodo,
    setEditingTodo,
  } = useTodoContext();

  const onSubmit = async (values, actions) => {
    if (values.task === '')
      return toast({
        title: 'Task Cannot be Blank',
        status: 'error',
        position: 'top-right',
        isClosable: true,
      });

    if (editingTodo.status) {
      // Update Existing ToDo
      const variables = { id: editingTodo.id, task: values.task };

      try {
        const { data } = await updateTodoMutation(variables);
      } catch (error) {
        console.log(error);
      }

      setEditingTodo({
        status: false,
        id: null,
      });
    } else {
      // Add New ToDO
      try {
        const variables = { task: values.task };
        const { data } = await addTodoMutation(variables);
      } catch (error) {
        console.log(error);
      }
    }

    await actions.resetForm();
  };

  return (
    <Container maxW='lg' className='mt-20'>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <>
            <form onSubmit={handleSubmit} className='prose mb-2 lg:mb-10'>
              <h1 className='text-center'>Todo App</h1>
              <HStack
                className='rounded-md bg-slate-100 p-2 shadow-md md:p-4 lg:p-12'
                align='initial'
              >
                {allFields.map(({ id, label, ...props }) => (
                  <FormikInput key={id} {...props} />
                ))}
                {editingTodo.status ? (
                  <Button
                    w={48}
                    colorScheme='blue'
                    type='submit'
                    disabled={isSubmitting}
                  >
                    Update Task
                  </Button>
                ) : (
                  <Button
                    w={48}
                    colorScheme='blue'
                    type='submit'
                    disabled={isSubmitting}
                  >
                    Create Task
                  </Button>
                )}
              </HStack>
            </form>
            <DisplayAllTasks />
          </>
        )}
      </Formik>
    </Container>
  );
};

export default TodoApp;

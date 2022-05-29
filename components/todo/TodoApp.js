import React from 'react';
import { Button, Container, HStack } from '@chakra-ui/react';
import { Formik } from 'formik';
import * as yup from 'yup';

import FormikInput from '../shared/FormikInput';
import DisplayAllTasks from './DisplayAllTasks';
import { useTodoContext } from '@/utils/context/todo/TodoContext';

const TodoApp = () => {
  const { data, allFields, initialValues, validationSchema } = useTodoContext();

  const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Container maxW='lg' className='mt-20'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className='prose mb-2 lg:mb-10'>
            <h1 className='text-center'>Todo App</h1>
            <HStack
              className='rounded-md bg-slate-100 p-2 shadow-md md:p-4 lg:p-12'
              align='initial'
            >
              {allFields.map(({ id, label, ...props }) => (
                <FormikInput key={id} {...props} />
              ))}
              <Button
                w={48}
                colorScheme='blue'
                type='submit'
                disabled={isSubmitting}
              >
                Create Task
              </Button>
            </HStack>
          </form>
        )}
      </Formik>

      <DisplayAllTasks />
    </Container>
  );
};

export default TodoApp;

import React from 'react';
import { Button, Container, HStack, Input } from '@chakra-ui/react';

import DisplayAllTasks from './DisplayAllTasks';

const TodoApp = () => {
  return (
    <Container maxW='lg' className='mt-20'>
      <div className='prose mb-10'>
        <h1 className='text-center'>Todo App</h1>
        <HStack className='rounded-md bg-slate-100 p-12 shadow-md'>
          <Input type='text' placeholder='Enter your Task' />
          <Button w={48} colorScheme='blue'>
            Create Task
          </Button>
        </HStack>
      </div>

      <DisplayAllTasks />
    </Container>
  );
};

export default TodoApp;

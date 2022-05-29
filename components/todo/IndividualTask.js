import { Container, IconButton, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { MdDeleteForever, MdEdit, MdOutlineDoneAll } from 'react-icons/md';

const IndividualTask = ({ todo }) => {
  return (
    <HStack
      justify='space-between'
      className='m-2 rounded-md bg-slate-100 py-2 px-4 shadow-md'
    >
      <Text className='hover:cursor-pointer'>{todo.task}</Text>
      <HStack>
        <IconButton colorScheme='green' icon={<MdOutlineDoneAll />} isRound />
        <IconButton colorScheme='blue' icon={<MdEdit />} isRound />
        <IconButton colorScheme='red' icon={<MdDeleteForever />} isRound />
      </HStack>
    </HStack>
  );
};

export default IndividualTask;

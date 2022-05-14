import React, { useState, useReducer } from 'react';
import { Button, HStack, Center } from '@chakra-ui/react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };

    case 'decrement':
      return { ...state, count: state.count - action.payload };

    default:
      return { ...state };
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <Center>
      <HStack>
        <Button
          colorScheme='blue'
          onClick={() => dispatch({ type: 'decrement', payload: 10 })}
        >{` - `}</Button>
        <p>{state.count}</p>
        <Button
          colorScheme='blue'
          onClick={() => dispatch({ type: 'increment', payload: 10 })}
        >{` + `}</Button>
      </HStack>
    </Center>
  );
};

export default Counter;

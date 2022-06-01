import React, { useState, useReducer } from 'react';
import { Container, Button, HStack, VStack } from '@chakra-ui/react';

import useCounterStore from './store';

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

  const zustandCount = useCounterStore((state) => state.count);
  const zustandIncrement = useCounterStore((state) => state.increment);
  const zustandDecrement = useCounterStore((state) => state.decrement);

  return (
    <Container>
      <VStack m={10}>
        <h1>Counter with useReducer</h1>
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
      </VStack>
      <VStack m={10}>
        <h1>Counter with Zustand State management</h1>
        <HStack>
          <Button colorScheme='blue' onClick={zustandDecrement}>{` - `}</Button>
          <p>{zustandCount}</p>
          <Button colorScheme='blue' onClick={zustandIncrement}>{` + `}</Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Counter;

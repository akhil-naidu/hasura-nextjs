import React from 'react';
import { Container, Button, HStack, VStack } from '@chakra-ui/react';

import useCounterStore from './store';

const CounterWithZustand = () => {
  console.log('counter with Zustand');

  const zustandIncrement = useCounterStore((state) => state.increment);
  const zustandDecrement = useCounterStore((state) => state.decrement);

  return (
    <Container>
      <VStack m={10}>
        <h1>Counter with Zustand State management</h1>
        <HStack>
          <Button colorScheme='blue' onClick={zustandDecrement}>{` - `}</Button>
          <CounterWithZustandValue />
          <Button colorScheme='blue' onClick={zustandIncrement}>{` + `}</Button>
          <ToggleThemeWithZustand />
        </HStack>
      </VStack>
    </Container>
  );
};

const CounterWithZustandValue = () => {
  console.log('Triggered the nested Zustand child, counter');
  const zustandCount = useCounterStore((state) => state.count);
  return <p>{zustandCount}</p>;
};

const ToggleThemeWithZustand = () => {
  console.log('Triggered the nested Zustand child, theme');

  const zustandTheme = useCounterStore((state) => state.darkTheme);
  const zustandToggleTheme = useCounterStore((state) => state.toggleTheme);

  return (
    <Button onClick={zustandToggleTheme}>
      {zustandTheme ? 'dark' : 'light'}
    </Button>
  );
};

export default CounterWithZustand;

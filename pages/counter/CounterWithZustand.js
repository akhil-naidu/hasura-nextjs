import React from 'react';
import { Container, Button, HStack, VStack } from '@chakra-ui/react';

import useCounterStore from './store';

const CounterWithZustand = () => {
  console.log('counter with Zustand');

  const zustandIncrement = useCounterStore((state) => state.increment);
  const zustandDecrement = useCounterStore((state) => state.decrement);

  return (
    <Container maxW='full'>
      <VStack m={10}>
        <h1>Counter with Zustand State management</h1>
        <HStack>
          <Button colorScheme='blue' onClick={zustandDecrement}>{` - `}</Button>
          <CounterWithZustandValue />
          <Button colorScheme='blue' onClick={zustandIncrement}>{` + `}</Button>
          <ToggleThemeWithZustand />
        </HStack>
        <SchoolStrength />
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

const SchoolStrength = () => {
  console.log('Trigged the nested Zustand child, strength');

  const zustandSchoolStrength = useCounterStore(
    (state) => state.schoolStrength,
  );
  const zustandAddNewStudent = useCounterStore((state) => state.addNewStudent);

  console.log(zustandSchoolStrength);

  return (
    <Container className='prose' maxW='fit-content'>
      <VStack m={10} className=' rounded-md bg-blue-200 p-8'>
        <h3 className='text-center'>
          Using Immer and Zustand to update the nested object
        </h3>
        <p>Nested Object will be displayed in Console</p>
        <Button colorScheme={'blue'} onClick={zustandAddNewStudent}>
          Add New Student
        </Button>
      </VStack>
      <div>
        <pre>{`
          import create from 'zustand';
          import produce from 'immer';

          const useCounterStore = create((set) => ({
            count: 0,
            darkTheme: true,
            schoolStrength: { school: { strength: 20 } },
            increment: () => set((state) => ({ count: state.count + 10 })),
            decrement: () => set((state) => ({ count: state.count - 10 })),
            toggleTheme: () => set((state) => ({ darkTheme: !state.darkTheme })),
            addNewStudent: () =>
              set(
                produce((state) => {
                  state.schoolStrength.school.strength += 1;
                }),
              ),
          }));

          export default useCounterStore;

        `}</pre>
      </div>
    </Container>
  );
};

export default CounterWithZustand;

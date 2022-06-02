import React from 'react';
import { Container, Button, HStack, VStack } from '@chakra-ui/react';

import { useCounterStore } from '@/utils/store';

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
  const zustandActions = useCounterStore((state) => state.actions);

  console.log('Displaying Zustand Actions', zustandActions());
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

const Code = () => {
  return (
    <div className='mockup-code'>
      <pre data-prefix='1'>
        <code>{`import create from 'zustand';`}</code>
      </pre>
      <pre data-prefix='2'>
        <code>{`import produce from 'immer';`}</code>
      </pre>
      <pre data-prefix='3'>
        <code>{` `}</code>
      </pre>
      <pre data-prefix='4'>
        <code>{`const useCounterStore = create((set, get) => ({`}</code>
      </pre>
      <pre data-prefix='5'>
        <code>{`  count: 0,`}</code>
      </pre>
      <pre data-prefix='6'>
        <code>{`    darkTheme: true,`}</code>
      </pre>
      <pre data-prefix='7'>
        <code>{`    schoolStrength: { school: { strength: 20 } },`}</code>
      </pre>
      <pre data-prefix='8'>
        <code>{`    increment: () => set((state) => ({ count: state.count + 10 })),`}</code>
      </pre>
      <pre data-prefix='9'>
        <code>{`    decrement: () => set((state) => ({ count: state.count - 10 })),`}</code>
      </pre>
      <pre data-prefix='10'>
        <code>{`    toggleTheme: () => set((state) => ({ darkTheme: !state.darkTheme })),`}</code>
      </pre>
      <pre data-prefix='11'>
        <code>{`actions: () => {`}</code>
      </pre>
      <pre data-prefix='12'>
        <code>{`  const count = get().count;`}</code>
      </pre>
      <pre data-prefix='13'>
        <code>{`  return count;`}</code>
      </pre>
      <pre data-prefix='14'>
        <code>{`},`}</code>
      </pre>
      <pre data-prefix='15'>
        <code>{`addNewStudent: () =>`}</code>
      </pre>
      <pre data-prefix='16'>
        <code>{`  set(`}</code>
      </pre>
      <pre data-prefix='17'>
        <code>{`   produce((state) => {`}</code>
      </pre>
      <pre data-prefix='18'>
        <code>{`    state.schoolStrength.school.strength += 1;`}</code>
      </pre>
      <pre data-prefix='19'>
        <code>{`   }),`}</code>
      </pre>
      <pre data-prefix='20'>
        <code>{`  ),`}</code>
      </pre>
      <pre data-prefix='21'>
        <code>{`}));`}</code>
      </pre>
      <pre data-prefix='22'>
        <code>{``}</code>
      </pre>
      <pre data-prefix='23'>
        <code>{`export default useCounterStore;`}</code>
      </pre>
    </div>
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
    <Container maxW='fit-content'>
      <div className='prose'>
        <VStack m={10} className=' rounded-md bg-blue-200 p-8'>
          <h3 className='text-center'>
            Using Immer and Zustand to update the nested object
          </h3>
          <p>Nested Object will be displayed in Console</p>
          <Button colorScheme={'blue'} onClick={zustandAddNewStudent}>
            Add New Student
          </Button>
        </VStack>
      </div>
      <Code />
    </Container>
  );
};

export default CounterWithZustand;

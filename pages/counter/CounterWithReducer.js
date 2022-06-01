import React, { useReducer, createContext, useContext } from 'react';
import { Container, Button, HStack, VStack } from '@chakra-ui/react';

const CounterContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };

    case 'decrement':
      return { ...state, count: state.count - action.payload };

    case 'toggleTheme':
      return { ...state, darkTheme: !state.darkTheme };

    default:
      return { ...state };
  }
};

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, darkTheme: true });
  console.log('counter with useReducer parent');

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <Container>
        <VStack m={10}>
          <h1>Counter with useReducer</h1>
          <HStack>
            <Button
              colorScheme='blue'
              onClick={() => dispatch({ type: 'decrement', payload: 10 })}
            >{` - `}</Button>
            <CounterWithReducerValue />
            <Button
              colorScheme='blue'
              onClick={() => dispatch({ type: 'increment', payload: 10 })}
            >{` + `}</Button>
            <ToggleThemeWithReducer />
          </HStack>
        </VStack>
      </Container>
    </CounterContext.Provider>
  );
};

const CounterWithReducerValue = () => {
  console.log('triggered the nested useReducer Child, count');
  const { state } = useContext(CounterContext);

  return <p>{state.count}</p>;
};

const ToggleThemeWithReducer = () => {
  console.log('triggered the nested useReducer Child, theme');

  const { state, dispatch } = useContext(CounterContext);

  return (
    <Button onClick={() => dispatch({ type: 'toggleTheme' })}>
      {state.darkTheme ? 'dark' : 'light'}
    </Button>
  );
};

export default CounterWithReducer;

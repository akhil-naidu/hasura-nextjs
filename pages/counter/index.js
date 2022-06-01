import React from 'react';
import CounterWithReducer from './CounterWithReducer';
import CounterWithZustand from './CounterWithZustand';

const Counter = () => {
  return (
    <div>
      <CounterWithReducer />
      <CounterWithZustand />
    </div>
  );
};

export default Counter;

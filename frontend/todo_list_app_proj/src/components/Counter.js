import React, { useState } from 'react';

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment} test-id="button">Increment</button>
      <button onClick={decrement} test-id="button">Decrement</button>
    </div>
  );
};

export default Counter;
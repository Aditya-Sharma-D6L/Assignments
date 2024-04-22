import React, { useState } from 'react';

const Counter1 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment} test-id="button">Increment</button>
    </div>
  );
};

export default Counter1;
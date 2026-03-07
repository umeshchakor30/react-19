import React, { useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState(0);
  const [rCounter, setRCounter] = useState(10);

  const handleCounter = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <h1>Random Counter: {rCounter}</h1>
      <button onClick={handleCounter}>Update Counter</button>
      <button onClick={() => setRCounter(rCounter - 1)}>R Counter</button>
    </div>
  );
};

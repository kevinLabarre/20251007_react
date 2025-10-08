import { useState } from "react";

function HookUseState() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevValue) => prevValue + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>UseState: exemple compteur</h1>
      count avec useState: {count}
      <button onClick={increment}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default HookUseState;

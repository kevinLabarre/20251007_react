import { useState } from "react";

function HookUseState() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevValue) => prevValue + 1);
  };

  const reset = () => {
    setCount(0);
  };

  // Exemple 2:
  const [count2, setCount2] = useState(0);
  const increment2 = () => {
    setCount2((prev) => prev + 1);
    console.log(count2);
  };

  return (
    <>
      <h1>UseState: exemple compteur</h1>
      count avec useState: {count}
      <button onClick={increment}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <button onClick={reset}>reset</button>
      {/* Exemple 2 */}
      <p>{count2}</p>
      <button onClick={increment2}>+</button>
    </>
  );
}

export default HookUseState;

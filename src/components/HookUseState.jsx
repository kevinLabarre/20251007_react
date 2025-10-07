import { useState } from "react";

function HookUseState() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevValue) => prevValue + 1);
  };

  // Compléter le compteur -->
  // --> Implémter le 'onCLick' bouton -
  // --> Implémter le 'reset' bouton -

  return (
    <>
      <h1>UseState: exemple compteur</h1>
      count avec useState: {count}
      <button onClick={increment}>+</button>
      <button>-</button>
      <button>reset</button>
    </>
  );
}

export default HookUseState;

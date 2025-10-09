import { useState } from "react";

export const useIncrement = ({
  initialState = 0,
  max = Infinity,
  min = -Infinity,
}) => {
  const [count, setCount] = useState(initialState); // 0 valeur initiale

  const incrementFct = () => setCount((prev) => (prev < max ? prev + 1 : prev));
  const decrementFct = () => setCount((prev) => (prev > min ? prev - 1 : prev));

  return { count, increment: incrementFct, decrement: decrementFct };
};

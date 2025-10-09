import { useState } from "react";

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = () => setState((prev) => !prev);

  return [state, toggle];
};

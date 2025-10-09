import { useIncrement } from "../hooks/useIncrement";
import { useToggle } from "../hooks/useToggle";

export const CustomHook = () => {
  const [checked, toggle] = useToggle(true);

  const {
    count,
    increment: myIncrement,
    decrement,
  } = useIncrement({
    min: 0,
    initialState: 10,
  });

  return (
    <>
      <h1>Les hooks personnalisés</h1>
      <a href="https://usehooks.com/" className="underline">
        Plein de hooks personnalisé ici !!
      </a>
      <h2>Cas de figure n°1</h2>
      <p>
        Dans une appli react, on peut souvent avoir besoin de faire varier une
        valeur entre vrai et faux. Par exemple pour afficher/masquer un élément.
        Pour cela, on peut mettre en place un hook personnalisé
      </p>
      <input type="checkbox" onChange={toggle} checked={checked} />
      {checked && <p>Elément affiché</p>}
      <h2>Cas de figure n°2</h2>
      <p>Je veux utiliser un hook perso. pour gérer un compteur</p>
      <p>Count: {count}</p>
      <button onClick={myIncrement}>+</button>

      {/* --> Equivalent à ligne au-dessus */}
      {/* <button onClick={() => myIncrement()}>+</button>  */}

      <button onClick={decrement}>-</button>
    </>
  );
};

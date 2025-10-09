import { useToggle } from "../hooks/useToggle";

export const CustomHook = () => {
  const [checked, toggle] = useToggle(true);

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
    </>
  );
};

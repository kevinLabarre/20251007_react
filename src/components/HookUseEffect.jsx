import { useEffect, useState } from "react";

export const HookUseEffect = () => {
  const [count, setCount] = useState(0);

  //   Ce qui est dans mon useEffect sera exécuté
  //   - au chargement du composant
  //   - à chaque changement de 'count'
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // Si je laisse le tableau de dépendance vide
  // --> je m'assure que le code à l'intérieur du useEffect sera déclenché une seule fois
  useEffect(() => {
    console.log("UseEffect déclenché uniquement au chargement du composant");

    return () =>
      console.log(
        "la fonction qui se déclenchera lors de la destruction du composant"
      );
  }, []);

  return (
    <>
      <h1>Le hook useEffect</h1>

      <ul>
        Le hook useEffect est utilisé :
        <li>pour gérer des effets secondaires dans un composant</li>
        <li>
          pour effectuer des opérations après le rendu du composant : (
          <strong>comme des appels à des API</strong>, la manipulation du DOM,
          la gestion d'abonnement ...)
        </li>
        <p>
          <strong>
            useEffect() est très souvent utilisé en conjonction avec un useState
          </strong>
        </p>
      </ul>

      <h2>Exemple 1:</h2>
      <p>count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </>
  );
};

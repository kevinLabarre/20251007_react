import { useState } from "react";
import { FruitsList } from "./FruitsList";

export const ExerciceFruits = () => {
  const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState("");

  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };

  const products = [
    { category: "Fruits", price: "$1", number: 0, name: "Banana" },
    { category: "Fruits", price: "$1", number: 2, name: "Mango" },
    { category: "Fruits", price: "$2", number: 0, name: "Pineapple" },
    { category: "Vegetables", price: "$2", number: 4, name: "Broccoli" },
    { category: "Vegetables", price: "$4", number: 0, name: "Carrot" },
    { category: "Vegetables", price: "$1", number: 6, name: "Zucchini" },
  ];

  const fruits = products.filter((product) => product.category === "Fruits");
  const vegetables = products.filter(
    (product) => product.category === "Vegetables"
  );

  return (
    <>
      <h1>ExerciceFruits</h1>
      <h2>Consigne :</h2>
      <p>
        1. Créer un composant enfant qui affiche les produits, l'appeler deux
        fois : Une fois pour les fruits / une fois pour les légumes
      </p>
      <p>
        2. Créer une checkbox qui permettra d'afficher/masquer les produits qui
        ne sont plus en stock (quand number est égal à 0)
      </p>
      3. Faire une barre de recherche qui permettra de filtrer les éléments
      <h2>Correction</h2>
      <input type="checkbox" checked={checked} onChange={handleChecked} />
      Afficher hors stock
      {/* <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      /> */}
      <br />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FruitsList
        products={fruits}
        afficherHorsSotck={checked}
        searchValue={search}
      />
      <FruitsList
        products={vegetables}
        afficherHorsSotck={checked}
        searchValue={search}
      />
    </>
  );
};

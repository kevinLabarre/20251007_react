export const ExerciceFruits = () => {
  const products = [
    { category: "Fruits", price: "$1", number: 0, name: "Banana" },
    { category: "Fruits", price: "$1", number: 2, name: "Mango" },
    { category: "Fruits", price: "$2", number: 0, name: "Pineapple" },
    { category: "Vegetables", price: "$2", number: 4, name: "Broccoli" },
    { category: "Vegetables", price: "$4", number: 0, name: "Carrot" },
    { category: "Vegetables", price: "$1", number: 6, name: "Zucchini" },
  ];

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
      {/* 
      <List data={fruits}/>
      <List data={vegetables}/> 
      */}
    </>
  );
};

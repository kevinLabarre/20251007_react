import axios from "axios";
import { useEffect, useState } from "react";

export const RequestApiExemple = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products") // Quand on ne souhaite pas gérer les erreurs, on peut utiliser que le .then
      .then((resp) => {
        setProducts(resp.data);
        console.log(resp.data);
      });
  }, []);

  axios
    .get("http://localhost:3001/products")
    .then((resp) => console.log(resp.data)) // fonction se déclenche uniquement si j'ai un retour sans erreur
    .catch((err) => console.error(err)) // fonction se déclenche uniquement si j'ai une erreur
    .finally(() => console.log("réponse reçue"));

  return (
    <>
      <p>Tableau de produits: </p>
      {products.length > 0 && <p>info du 1er produit: {products[0].name}</p>}

      {/* { products.map((p) => ) } */}
    </>
  );
};

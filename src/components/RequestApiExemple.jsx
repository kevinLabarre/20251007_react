import axios from "axios";
import { useEffect, useState } from "react";
import { TableProducts } from "./TableProducts";

export const RequestApiExemple = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
    // loadProductAsync();
  }, []);

  const handleDelete = (product) => {
    setProducts((prev) => prev.filter((p) => p.id !== product.id));
  };

  const loadProducts = () => {
    // Quand on ne souhaite pas gérer les erreurs, on peut utiliser que le .then
    axios.get("http://localhost:3001/products").then((resp) => {
      setProducts(resp.data);
      console.log(resp.data);
    });
    // .catch((err) => console.error(err)) // fonction se déclenche uniquement si j'ai une erreur
    // .finally(() => console.log("réponse reçue"));
  };

  // Autre syntaxe possible avec axios
  const loadProductAsync = async () => {
    try {
      const response = await axios.get("http://localhost:3001/products");
      setProducts(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <p>Tableau de produits: </p>
      <TableProducts data={products} deleteProduct={handleDelete} />
    </>
  );
};

import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { TableProducts } from "./TableProducts";

export const RequestApiWithCustomHook = () => {
  const { getProducts } = useProducts();

  const [products, setProducts] = useState([]);

  // Avec un tableau de dépendance vide,
  // on s'assure que notre getProducts() sera appelé une seule fois
  // au chargement du composant
  useEffect(() => {
    getProducts().then((resp) => setProducts(resp.data));
  }, []);

  const handleDelete = (deletedProduct) => {
    setProducts((prev) => prev.filter((p) => p.id !== deletedProduct.id));
  };

  return (
    <>
      <h1>Récupération avec un hook personnalisé</h1>
      <TableProducts data={products} deleteProduct={handleDelete} />
    </>
  );
};

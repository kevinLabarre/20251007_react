import { useProducts } from "../hooks/useProducts";

export const RequestApiWithCustomHook = () => {
  const { getProducts } = useProducts();

  getProducts().then((resp) =>
    console.log("En utilisant le hook: ", resp.data)
  );

  // Afficher sur la page les produits que l'on voit dans notre console

  return (
    <>
      <h1>Récupération avec un hook personnalisé</h1>
    </>
  );
};

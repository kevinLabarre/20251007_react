export const FruitsList = ({ products, afficherHorsSotck, searchValue }) => {
  return (
    <>
      {products
        .filter(
          (product) =>
            (afficherHorsSotck ? true : product.number > 0) &&
            product.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((p) => (
          <ul key={p.name}>
            <li>{p.name}</li>
            <li>catégorie: {p.category}</li>
            <li>Prix: {p.price}</li>
            <li>Quantité: {p.number}</li>
          </ul>
        ))}
    </>
  );
};

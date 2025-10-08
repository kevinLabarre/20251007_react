import axios from "axios";

export const TableProducts = ({ data }) => {
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/products/${id}`);
  };

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>type</th>
            <th>color</th>
            <th>season</th>
            <th>calories</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.type}</td>
              <td>{product.color}</td>
              <td>{product.season}</td>
              <td>{product.calories}</td>
              <td>
                <button onClick={() => handleDelete(product.id)}>
                  supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

import { useState } from "react";

function Form() {
  // Exemple 1:
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // Exemple 2:
  const [checked, setChecked] = useState(true);

  return (
    <>
      <h1>Les formulaires</h1>
      <h2>Les champs contrôlés</h2>
      <p>
        En react, nous avons un concept que nous pouvons appeler 'les champs
        contrôlés'. En utilisant le onChange() d'une input et le hook
        useState(), nous pouvons mettre à jour une variable une variable à
        chaque changement (donc à chaque fois qu'un caractère est ajouté ou
        supprimé)
      </p>
      <h2>Exemple 1</h2>
      <input type="text" onChange={handleChange} value={name} />
      <p>Variable mise à jour : {name}</p>
      <h2>Exemple 2</h2>
      {/* Avec les 'checkbox', nous devons utilise 'checked' à la place de 'value' */}

      <input
        type="checkbox"
        onChange={(e) => setChecked(e.target.checked)}
        checked={checked}
      />

      {checked ? <p>Case coché !</p> : <p>case non cochée</p>}
      {checked && <p>Case coché !</p>}
    </>
  );
}

export default Form;

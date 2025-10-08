import "./App.css";
import reactImage from "./assets/react.svg";
import HookUseState from "./components/HookUseState";
import List from "./components/List";
import MyFirstComponent from "./components/MyFirstComponent";
import Form from "./components/Form";
import { ExerciceFruits } from "./components/Exercice/ExerciceFruits";

function App() {
  const title = "Bienvenue !";

  const title2 = <h1>Bienvenue !</h1>;

  const src = reactImage;

  const welcome = "Bonjour <strong>tout le monde</strong>, et bienvenue !";

  const textStyle = { color: "white", backgroundColor: "black" };

  const displayTitle = () => {
    return <h1>Bienvenue !</h1>;
  };

  const displayText = true;
  const myTable = [];

  const handleClick = () => {
    alert("j'ai cliqué !");
  };

  return (
    <>
      <h1>{title}</h1>
      {title2}
      {displayTitle()}
      <p>Résultat de 1 + 1 = {1 + 1}</p>

      <p>{welcome}</p>

      <p dangerouslySetInnerHTML={{ __html: welcome }}></p>

      <img src={src} alt="logo" />
      <img src={reactImage} alt="logo" />
      <img src="../src/assets/react.svg" alt="logo" />

      <p className="my-text">texte stylisé avec className</p>

      <p style={{ color: "white", backgroundColor: "black" }}>
        texte stylisé avec attribut 'style'
      </p>

      <p style={textStyle}>texte stylisé avec 'style'</p>

      {/* Affichage conditionnel: solution 1 */}

      {displayText && (
        <div>
          <div>
            <p>J'ai choisi d'afficher le texte</p>
          </div>
        </div>
      )}

      {/* Affichage conditionnel: solution 2 */}

      {displayText ? (
        <p>J'ai choisi d'afficher</p>
      ) : (
        <p>j'ai choisi de ne pas afficher</p>
      )}

      {myTable.length > 0 ? (
        <p>1er element du tableau: {myTable[0]}</p>
      ) : (
        <p>Erreur: tableau vide</p>
      )}

      <button onClick={handleClick}>clique ici !</button>
      <button onClick={() => alert("j'ai cliqué !")}>clique ici !</button>

      <MyFirstComponent />

      <HookUseState />

      <List />

      <Form />

      <ExerciceFruits />
    </>
  );
}

export default App;

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <section>
        <h1>Navbar</h1>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/passage-donnee-parent-enfant">Passage données </Link>
          <Link to="/hook-use-state"> UseState</Link>
          <Link to="/parcourir-list-avac-map">Liste avec .map() </Link>
          <Link to="/formulaire"> formulaire </Link>
          <Link to="/Exercice-fruits-legumes"> Exercice</Link>
        </nav>
      </section>
    </>
  );
};

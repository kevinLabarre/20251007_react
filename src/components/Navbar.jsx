import { Link } from "react-router-dom";
import "../style/Navbar.css";

export const Navbar = () => {
  // Idée d'amélioration: extraire la liste des liens du HTML et la mettre ici
  // (pour éviter d'avoir deux listes à gérer)

  return (
    <>
      {/* Version sans aucun style */}
      {/* <section>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/passage-donnee-parent-enfant">Passage données </Link>
          <Link to="/hook-use-state"> UseState</Link>
          <Link to="/parcourir-list-avac-map">Liste avec .map() </Link>
          <Link to="/formulaire"> formulaire </Link>
          <Link to="/Exercice-fruits-legumes"> Exercice</Link>
        </nav>
      </section> */}

      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/passage-donnee-parent-enfant">Passage données</Link>
              </li>
              <li>
                <Link to="/hook-use-state"> UseState</Link>
              </li>
              <li>
                <Link to="/parcourir-list-avac-map">Liste avec .map() </Link>
              </li>
              <li>
                <Link to="/formulaire"> formulaire </Link>
              </li>
              <li>
                <Link to="/Exercice-fruits-legumes"> Exercice</Link>
              </li>
              <li>
                <Link to="/hook-use-effect">hook useEffect</Link>
              </li>
              <li>
                <Link to="/requete-api">Requêtes API</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            Accueil
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/passage-donnee-parent-enfant">Passage données</Link>
            </li>
            <li>
              <Link to="/hook-use-state"> UseState</Link>
            </li>
            <li>
              <Link to="/parcourir-list-avac-map">Liste avec .map() </Link>
            </li>
            <li>
              <Link to="/formulaire"> formulaire </Link>
            </li>
            <li>
              <Link to="/Exercice-fruits-legumes"> Exercice</Link>
            </li>
            <li>
              <Link to="/hook-use-effect">hook useEffect</Link>
            </li>
            <li>
              <Link to="/requete-api">Requêtes API</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

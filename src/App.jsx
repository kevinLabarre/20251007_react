import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { JsxTheorie } from "./components/JsxTheorie";
import MyFirstComponent from "./components/MyFirstComponent";
import HookUseState from "./components/HookUseState";
import List from "./components/List";
import Form from "./components/Form";
import { ExerciceFruits } from "./components/Exercice/ExerciceFruits";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    // Touts les composants de mon app doivent être placés dans l'élément 'BrowserRouter'
    // ( élément que nous avons renommé 'Router')
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<JsxTheorie />} />
          <Route
            path="/passage-donnee-parent-enfant"
            element={<MyFirstComponent />}
          />
          <Route path="/hook-use-state" element={<HookUseState />} />
          <Route path="/parcourir-list-avac-map" element={<List />} />
          <Route path="/formulaire" element={<Form />} />
          <Route path="/Exercice-fruits-legumes" element={<ExerciceFruits />} />

          <Route path="*" element={<h1>Page 404 !</h1>} />
        </Routes>
      </div>

      <p>Mon footer ici !</p>
    </Router>
  );
}

export default App;

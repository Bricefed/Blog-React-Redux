import { Link } from "react-router-dom";
import "./Navigation.scss";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/ecrire">Écrire</Link>
        </li>
      </ul>
    </nav>
  );
}

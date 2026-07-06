import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        ⚾ SportsHub
      </Link>

      <ul className="nav-links">
        <li><Link to="/mlb">MLB</Link></li>
        <li>NBA</li>
        <li>NFL</li>
        <li>Pronósticos</li>
        <li>Premium</li>
      </ul>

      <button className="login-btn">Iniciar sesión</button>
    </nav>
  );
}

export default Navbar;
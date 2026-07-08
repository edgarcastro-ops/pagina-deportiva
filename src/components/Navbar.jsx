import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        ⚾ SportsHub
      </div>

      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/mlb">MLB</Link></li>
        <li><a href="#">NBA</a></li>
        <li><a href="#">Fútbol</a></li>
        <li><a href="#">Premium</a></li>
      </ul>

      <button className="login-btn">
        Iniciar sesión
      </button>
    </nav>
  );
}

export default Navbar;
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import TatooineLogo from "../assets/TatooineLogo.png"; // Corrige el nombre y la ruta del logo

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      {/* Logo a la izquierda, redirige al inicio */}
      <div className="navbar-logo">
        <Link to="/">
          <img
            src={TatooineLogo}
            alt="Tatooine Medical Center"
            className="logo"
          />
        </Link>
      </div>

      {/* Enlaces a la derecha */}
      <ul className="navbar-links">
        {location.pathname !== "/" && (
          <li>
            <Link to="/">Inicio</Link>
          </li>
        )}
        <li>
          <Link to="/casos">Casos Clínicos</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/servicios">Servicios</Link>
        </li>
        <li>
          <Link to="/operating-hours">Horarios</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

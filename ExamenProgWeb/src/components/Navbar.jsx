import React from 'react'
import {useTheme} from "../hooks/UseTheme.js";
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${theme === 'dark' ? 'bg-dark' : 'bg-primary'} navbar`}>
       <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Parcial React</span>
        <div className="navbar-nav d-flex flex-row gap-3 navbar-links">
          <Link to="/" className="nav-link">
            Posts
          </Link>
          <Link to="/nuevoPost" className="nav-link">
            Nuevo Post
          </Link>
        </div>
        <button
          className="btn btn-outline-light btn-sm"
          onClick={toggleTheme}
        >
          {theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
        </button>
      </div>
    </nav>
  );
}

import React from 'react'
import {useTheme} from "../hooks/UseTheme.js";


import { Link } from 'react-router-dom';
export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <Link to="/">Posts</Link>
      {" | "}
      <Link to="/new">Nuevo Post</Link>


        <button onClick={toggleTheme}>
            {theme === 'light' ? 'oscuro' : 'claro'}
        </button>
    </nav>
  );
}

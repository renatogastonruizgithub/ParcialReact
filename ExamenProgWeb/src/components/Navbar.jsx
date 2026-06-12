import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Posts</Link>
      {" | "}
      <Link to="/new">Nuevo Post</Link>
    </nav>
  );
}

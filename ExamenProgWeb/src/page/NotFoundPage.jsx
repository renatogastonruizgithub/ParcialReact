import React from 'react'
import {Link} from 'react-router-dom'
export default function NotFoundPage() {
  return (
     <div className="container mt-5 text-center">
      <h2 className="text-danger">Error 404: Ruta no encontrada</h2>
      <p className="text-muted">
        La página que estás buscando no existe.
      </p>
      <Link to="/" className="btn btn-primary">
        Volver al Inicio
      </Link>
    </div>
  )
}

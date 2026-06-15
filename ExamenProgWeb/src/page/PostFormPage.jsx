import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePosts } from '../hooks/usePosts';

import LoadingSpinner from "../components/LoadingSpinner";
import PostForm from "../components/PostForm";

const PostFormPage = () => {
  // Obtiene el parámetro id
  const { id } = useParams();

  //Redirige Programáticamente
  const navigate = useNavigate();

  // convierte a booleano (truthy/falsy)
  const isEditing = !!id;

  const {state, obtenerPostPorId, agregarPost, editarPost} = usePosts();

  const [error, setError] = useState(null);

  // Cargar el post si estamos editando
  useEffect(() => {
    if (isEditing && id) {
      obtenerPostPorId(id);
    }
  }, [id]);

  // Maneja el envío del formulario tanto para crear como para editar
  const handleSubmit = async (formData) => {
    try {
      if (isEditing) {
        await editarPost(id, formData);
      } else {
        await agregarPost(formData);
      }
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  //Muestra el spinner mientras se carga el post
  if (state.loading) {
    return (
      <LoadingSpinner message={isEditing ? "Cargando post..." : "Procesando"} />
    );
  }

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div
          className={`card-header ${isEditing ? "bg-warning text-dark" : "bg-success text-white"}`}
        >
          <h3>{isEditing ? "Editar Post" : "Crear Nuevo Post"}</h3>
        </div>

        <div className="card-body">
          {error && <div className="alert alert-danger">{error}</div>}

          <PostForm
          post={isEditing ? state.postById : null}
            onSubmit={handleSubmit}
            isEditing={isEditing}
          />
        </div>
      </div>
    </div>
  );
};

export default PostFormPage;

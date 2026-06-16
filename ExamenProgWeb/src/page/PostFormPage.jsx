import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import LoadingSpinner from "../components/LoadingSpinner";
import PostForm from "../components/PostForm";
import { mostrarExito, mostrarError } from "../utils/alerts"; // usar SweetAlert al guardar

const PostFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const { state, obtenerPostPorId, agregarPost, editarPost } = usePosts();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isEditing && id) {
      obtenerPostPorId(id);
    }
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      if (isEditing) {
        await editarPost(id, formData);
        await mostrarExito("¡Guardado!", "Los cambios se guardaron correctamente"); // NUEVO
      } else {
        await agregarPost(formData);
        await mostrarExito("¡Creado!", "El post se creó correctamente"); // NUEVO
      }
      navigate("/");
    } catch (err) {
      setError(err.message);
      await mostrarError("Error", err.message); // NUEVO
    }
  };

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
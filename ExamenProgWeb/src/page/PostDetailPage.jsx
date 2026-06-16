import { useNavigate, useParams } from "react-router-dom";
import { usePostDetail } from "../hooks/usePosts";
import { usePosts } from "../hooks/usePosts";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import { confirmarEliminacion, mostrarExito } from "../utils/alerts"; // NUEVO

export default function PostDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { post, loading, error } = usePostDetail(id);
  const { eliminarPost } = usePosts();

  // NUEVO: eliminar con SweetAlert2 (sin ConfirmDeleteModal)
  const handleDelete = async () => {
    const result = await confirmarEliminacion();

    if (result.isConfirmed) {
      await eliminarPost(id);
      await mostrarExito("Éxito", "Post eliminado correctamente");
      navigate("/");
    }
  };

  if (loading) return <LoadingSpinner message="Cargando post..." />;
  if (error) return <ErrorMessage message={error} />;
  if (!post) return <ErrorMessage message="Post no encontrado" />;

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3>Detalle del Post</h3>
        </div>

        <div className="card-body">
          <h4>{post.title}</h4>
          <p>{post.body}</p>

          <div className="d-flex gap-2 mt-3">
            <button
              className="btn btn-outline-secondary"
              onClick={() => navigate("/")}
            >
              Volver
            </button>

            <button
              className="btn btn-warning"
              onClick={() => navigate(`/editarPost/${id}`)}
            >
              Editar
            </button>

            <button
              className="btn btn-danger"
              onClick={handleDelete} // CAMBIO: antes era setMostrarModal(true)
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
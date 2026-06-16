import { useNavigate } from "react-router-dom";
import { usePostsList } from "../hooks/usePosts";
import PostCard from "../components/PostCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import { confirmarEliminacion, mostrarExito } from "../utils/alerts"; //solo SweetAlert, sin modal

export default function PostsPage() {
  const { posts, error, loading, eliminarPost } = usePostsList();
  const navigate = useNavigate();

  // eliminar directo con SweetAlert2 (sin ConfirmDeleteModal)
  const handleDelete = async (id) => {
    const result = await confirmarEliminacion();

    if (result.isConfirmed) {
      await eliminarPost(id);
      await mostrarExito("Éxito", "Post eliminado correctamente");
    }
  };

  if (loading) return <LoadingSpinner message="Cargando posts..." />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Listado de Posts</h2>

      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-6 mb-3">
            <PostCard
              post={post}
              onView={(id) => navigate(`/detalle/${id}`)}
              onEdit={(id) => navigate(`/editarPost/${id}`)}
              onDelete={handleDelete} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostsList } from "../hooks/usePosts";
import PostCard from "../components/PostCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import { confirmarEliminacion, mostrarExito } from "../utils/alerts";
import "./PostsPage.css";

export default function PostsPage() {
  const { posts, error, loading, eliminarPost } = usePostsList();
  const navigate = useNavigate();

  // useRef: apunta al título / inicio del listado
  const topRef = useRef(null);

  // controla si se muestra el botón flotante
  const [showScrollTop, setShowScrollTop] = useState(false);

  // escucha el scroll y muestra el botón solo si bajaste bastante
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDelete = async (id) => {
    const result = await confirmarEliminacion();

    if (result.isConfirmed) {
      await eliminarPost(id);
      await mostrarExito("Éxito", "Post eliminado correctamente");
    }
  };

  // al hacer clic, scroll suave hacia el ref del inicio
  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (loading) return <LoadingSpinner message="Cargando posts..." />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container mt-4">
      {/* ref acá: es el "destino" del botón Volver arriba */}
      <h2 ref={topRef} className="mb-4">
        Listado de Posts
      </h2>

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

      {/* botón flotante: solo visible si showScrollTop es true */}
      {showScrollTop && (
        <button
          type="button"
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Volver arriba"
          title="Volver arriba"
        >
          ↑
        </button>
      )}
    </div>
  );
}
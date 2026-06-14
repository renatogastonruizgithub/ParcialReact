import "./PostCard.css";

export default function PostCard({
  post,
  onView,
  onEdit,
  onDelete,
}) {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>

      <p>{post.body}</p>

      <div className="post-buttons">
        <button onClick={() => onView(post.id)}>
          Ver
        </button>

        <button onClick={() => onEdit(post.id)}>
          Editar
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(post.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
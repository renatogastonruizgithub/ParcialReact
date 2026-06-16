import "./PostCard.css";

export default function PostCard({
  post,
  onView,
  onEdit,
  onDelete,
}) {
  return (
    <div className="post-card card shadow-sm h-100">
      <div className="card-body">
        <h3 className="card-title">{post.title}</h3>
        <p className="card-text">{post.body}</p>
        <div className="post-buttons d-flex gap-2 mt-3">
          {onView && (
            <button
              className="btn btn-primary btn-sm"
              onClick={() => onView(post.id)}
            >
              Ver
            </button>
          )}
          {onEdit && (
            <button
              className="btn btn-warning btn-sm"
              onClick={() => onEdit(post.id)}
            >
              Editar
            </button>
          )}
          {onDelete && (
            <button
              className="delete-btn btn btn-danger btn-sm"
              onClick={() => onDelete?.(post.id)}
            >
              Eliminar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
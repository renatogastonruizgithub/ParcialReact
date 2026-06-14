import "./ConfirmDeleteModal.css";

export default function ConfirmDeleteModal({
  isOpen,
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>
          ¿Desea eliminar este post?
        </h3>

        <div className="modal-buttons">
          <button onClick={onConfirm}>
            Sí
          </button>

          <button onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
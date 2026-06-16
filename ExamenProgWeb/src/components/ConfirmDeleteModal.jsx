import "./ConfirmDeleteModal.css";

export default function ConfirmDeleteModal({
  isOpen,
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  return (
   <div className="modal-overlay">
      <div className="modal shadow">
        <div className="modal-header">
          <h5 className="modal-title">Confirmar eliminación</h5>
          <button
            type="button"
            className="btn-close"
            onClick={onCancel}
          ></button>
        </div>
        <div className="modal-body">
          <p className="mb-0">¿Desea eliminar este post?</p>
        </div>
        <div className="modal-buttons modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancel}
          >
            No
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={onConfirm}
          >
            Sí, eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
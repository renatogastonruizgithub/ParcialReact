import "./LoadingSpinner.css";

export default function LoadingSpinner({
  message = "Cargando..."
}) {
  return (
     <div className="loading-container d-flex flex-column align-items-center justify-content-center py-5">
      <div
        className="spinner-border text-primary"
        role="status"
      >
        <span className="visually-hidden">{message}</span>
      </div>
      <p className="mt-3 mb-0">{message}</p>
    </div>
  );
}
import "./ErrorMessage.css";

export default function ErrorMessage({
  message = "Ocurrió un error"
}) {
  return (
    <div className="error-message alert alert-danger" role="alert">
      {message}
    </div>
  );
}
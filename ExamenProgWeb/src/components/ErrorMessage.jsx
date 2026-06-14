import "./ErrorMessage.css";

export default function ErrorMessage({
  message = "Ocurrió un error"
}) {
  return (
    <div className="error-message">
      {message}
    </div>
  );
}
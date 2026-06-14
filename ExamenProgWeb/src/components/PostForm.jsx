import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Formulario reutilizable para crear y editar posts.
const PostForm = ({ post, onSubmit, isEditing = false }) => {
  // hook para navegar programaticamente
  const navigate = useNavigate();

  //Estado que contiene los valores
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    userId: 1,
  });

  //Estado para manejar errores de validación
  const [errors, setErrors] = useState({});

  //Precarga los datos cuando estamos en modo edición.
  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title || "",
        body: post.body || "",
        userId: post.userId || 1,
      });
    }
  }, [post]);

  //Valida los campos obligatorios del formulario.
  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "El titulo es obligatorio";
    if (!formData.body.trim()) newErrors.body = "El contenido es obligatorio";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //Maneja los cambios, actualiza el estado de formData y limpia errores mientras se escribe
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  //Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    onSubmit(formData);
  };

  //Formulario
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input type="hidden" name="userId" value={formData.userId} />

        <label htmlFor="title" className="form-label">
          Titulo*
        </label>
        <input
          type="text"
          className={` form-control ${errors.title ? "is-invalid" : ""}`}
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Ingrese el Título"
        />

        {errors.title && <div className="invalid-feedback">{errors.title}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Contenido*
        </label>

        <textarea
          className={`form-control ${errors.body ? "is-invalid" : ""}`}
          name="body"
          id="body"
          rows="6"
          value={formData.body}
          onChange={handleChange}
          placeholder="Ingrese el contenido"
        />

        {errors.body && <div className="invalid-feedback">{errors.body}</div>}
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary">
          {isEditing ? "Guardar Cambios" : "Crear Post"}
        </button>

        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => navigate("/")}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default PostForm;

import { useState } from "react";
import "./PostForm.css";

export default function PostForm({
  onSubmit,
  initialData = {},
}) {
  const [title, setTitle] = useState(
    initialData.title || ""
  );

  const [body, setBody] = useState(
    initialData.body || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      title,
      body,
    });

    setTitle("");
    setBody("");
  };

  return (
    <form
      className="post-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        required
      />
      <textarea
        placeholder="Contenido"
        value={body}
        onChange={(e) =>
          setBody(e.target.value)
        }
        required
      />
      <button type="submit">
        Guardar
      </button>
    </form>
  );
}
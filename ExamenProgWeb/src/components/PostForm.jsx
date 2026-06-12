import { useState } from "react";

function PostForm({ onSubmit }) {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      title,
      body
    });
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Titulo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <textarea
        placeholder="Contenido"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <br />

      <button type="submit">
        Guardar
      </button>

    </form>
  );
}

export default PostForm;
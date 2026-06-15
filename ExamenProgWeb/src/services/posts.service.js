// Se asigna a una constante para evitar repetir la URL en cada función
const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Función auxiliar que centraliza el manejo de respuestas
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ error: "Error de conexión" }));
    throw new Error(error.error || `Error HTTP: ${response.status}`);
  }
  return response.json();
};

//Operaciones CRUD
export const postService = {
  //
  //Hace el Get para obtener la lista completa de posts con un límite de 15
  async getAll() {
    const response = await fetch(`${API_URL}?_limit=15`);
    return handleResponse(response);
  },

  //Hace el Get para obtener un post específico por su ID
  async getById(id) {
    const response = await fetch(`${API_URL}/${id}`);
    return handleResponse(response);
  },

  //Hace un Post para crear un nuevo post en la API
  async create(post) {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    return handleResponse(response);
  },

  //Hace un Put para actualizar un post existente
  async update(id, post) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    return handleResponse(response);
  },

  //HAce un Delete para eliminar un post
  async remove(id) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    return handleResponse(response);
  },
};

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ error: "Error de conexión" }));
    throw new Error(error.error || `Error HTTP: ${response.status}`);
  }
  return response.json();
};

export const postService = {
  async getAll() {
    const response = await fetch(API_URL);
    return handleResponse(response);
  },

  async getById(id) {
    const response = await fetch(`${API_URL}/${id}`);
    return handleResponse(response);
  },

  async create(post) {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    return handleResponse(response);
  },

  async update(id, post) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    return handleResponse(response);
  },

  async remove(id) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    return handleResponse(response);
  },
};

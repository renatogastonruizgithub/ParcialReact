import React from 'react'

export default function PostCard() {
  return (
    <div>
       <h3>{post.title}</h3>

      <p>{post.body}</p>

      <button>Ver</button>

      <button>Editar</button>

      <button onClick={() => onDelete(post.id)}>
        Eliminar
      </button>
      
    </div>
  )
}

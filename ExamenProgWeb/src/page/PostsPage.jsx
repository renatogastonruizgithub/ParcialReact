import React from 'react'
import { usePosts } from '../hooks/usePosts';
import { useEffect } from 'react';


export default function PostsPage() {
  const { state,cargarPosts } = usePosts();

useEffect(() => {
    cargarPosts();
  }, []);
  return (
    <div>
    <h1>Posts</h1>


{/* para probar que ande */}
    <ul>
      {state.posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
    </div>
  )
}

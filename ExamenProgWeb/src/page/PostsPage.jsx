import React from 'react'
import { usePostsList } from '../hooks/usePosts';
import PostCard from '../components/PostCard';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';



export default function PostsPage() {
  const { posts, error, loading, eliminarPost } = usePostsList()
  const navigate = useNavigate()

  const handleView = (id) => {
    navigate(`/detalle/${id}`)
  }
  const handleEdit = (id) => { navigate(`/editarPost/${id}`) }


  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro?")) {
      eliminarPost(id);
    }
  }



  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error} />

  if (!posts) return null

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id}
          post={post}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  )
}

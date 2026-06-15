import React from 'react'
import { usePostDetail } from '../hooks/usePosts';
import { useEffect } from 'react';
import PostCard from '../components/PostCard';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

export default function PostDetailPage() {
  // obtenemos el id de la url.
  const { id } = useParams()

  // aca desestructuramos el objeto del custom hook.
  const { post,loading,error} = usePostDetail(id)


  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error} />

  if (!post) return null



  return (
    <div>
      <h1>Detalle del post</h1>
      <PostCard
        post={post}
      />
    </div>
  )
}

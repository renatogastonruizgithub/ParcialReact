import { useContext } from 'react';
import { PostsContext } from '../context/PostsContext'; 


export const usePosts = () => {
  const context = useContext(PostsContext)
  if (!context) {
    throw new Error("usePosts debe usarse dentro de un PostsProvider")
  }
  return context
}
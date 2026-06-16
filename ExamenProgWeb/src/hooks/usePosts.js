import { useContext ,useEffect} from 'react';
import { PostsContext } from '../context/PostsContext'; 

//
export const usePosts = () => {
  const context = useContext(PostsContext)
  if (!context) {
    throw new Error("usePosts debe usarse dentro de un PostsProvider")
  }
  return context
}


// Custom hook para la pagina detalle le pasamsos el id del post que queremos cargar
export const usePostDetail = (id) => {
  const { state, obtenerPostPorId } = usePosts();
  
  useEffect(() => {
    if (id) obtenerPostPorId(id);
  }, [id, obtenerPostPorId]);

  //retorno el objeto para pintar los componentes de loading y errrr.
  return { 
    post: state.postById, //del state
    loading: state.loading, 
    error: state.error 
  };
};


//cargar todos los post en la pagina de posts
export const usePostsList = () => {
  const { state, cargarPosts, eliminarPost } = usePosts();

//solo si el state esta vacio
  useEffect(() => {
    if (state.posts.length === 0) {
      cargarPosts()
    }
  }, [cargarPosts])

  return { 
    posts: state.posts, //del state
    loading: state.loading, 
    error: state.error ,
    eliminarPost
  };
};
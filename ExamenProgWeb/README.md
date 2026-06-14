# levantar el proyecto
 npm run dev
# en PostConetex.js
esta el userReducer con el State y se lo pasamos al contextProvider para implentar los metodos del servicio 
# estos son los metodos para hacer el crud, ¿como usarlo? importar en el componente el usePost() y usar el metodo
const { state, loadPosts,cargarPosts,obtenerPostPorId,agregarPost,editarPost,eliminarPost } = usePosts();
ej:
useEffect(() => {
    loadPosts();
  }, []);

  if (state.loading) return <p>Cargando...</p>;



# nuevo commit 12/06/2026 hacer npm i para instarlar el hashBrouser 
# AppRouter
aca tenemos que agregar todas las rutas que necesitemos

# NotFoundPage 
componente para pagina no encontrada
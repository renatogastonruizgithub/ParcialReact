import { createContext, useReducer, useContext,useCallback  } from "react";
import { postService } from "../services/posts.service";

const initialState = {
    posts: [],         //usar para cargar todos los posts
    postById: null, // usar para el GET por ID
    loading: false,
    error: null,
}

function postsReducer(state, action) {
    switch (action.type) {
        case "LOADING":
            return { ...state, loading: true, error: null }

        case "GET_ALL":
            return { ...state, loading: false, posts: action.payload }

        case "GET_ONE":
            return { ...state, loading: false, postById: action.payload }

        case "CREATE":

            return { ...state, loading: false, posts: [...state.posts, action.payload] }

        case "UPDATE":

            return {
                ...state,
                loading: false,
                posts: state.posts.map((post) =>
                    post.id === action.payload.id ? action.payload : post
                ),
            };

        case "DELETE":
            return {
                ...state,
                loading: false,
                posts: state.posts.filter((post) => post.id !== action.payload),
            };

        case "ERROR":
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }
}

export const PostsContext = createContext();


export const PostsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(postsReducer, initialState)

    const cargarPosts = useCallback(async () => {
        dispatch({ type: "LOADING" })
        try {
            const data = await postService.getAll();
            dispatch({ type: "GET_ALL", payload: data })
        } catch (error) {
            dispatch({ type: "ERROR", payload: error.message })
            throw error
        }
    }, []);

    const obtenerPostPorId = useCallback(async (id) => {
        // primero verificamos si el post ya está en el estado
        const postEnEstado = state.posts.find(p => p.id.toString() === id.toString());

        if (postEnEstado) {          
            dispatch({ type: "GET_ONE", payload: postEnEstado });
            return;
        }

        dispatch({ type: "LOADING" })
        try {
            const data = await postService.getById(id);
            dispatch({ type: "GET_ONE", payload: data })
        } catch (error) {
            dispatch({ type: "ERROR", payload: error.message })
            throw error
        }
    }, []);


    const agregarPost = useCallback(async (postData) => {
        dispatch({ type: "LOADING" })
        try {
            const newPost = await postService.create(postData);
            dispatch({ type: "CREATE", payload: newPost })
        } catch (error) {
            dispatch({ type: "ERROR", payload: error.message })
            throw error
        }
    }, []);


    const editarPost = useCallback(async (id, postData) => {
        dispatch({ type: "LOADING" })
        try {
            const updatedPost = await postService.update(id, postData)
            dispatch({ type: "UPDATE", payload: updatedPost })
        } catch (error) {
            dispatch({ type: "ERROR", payload: error.message })
            throw error
        }
    }, []);


    const eliminarPost = useCallback(async (id) => {
        dispatch({ type: "LOADING" })
        try {
            await postService.remove(id)

            dispatch({ type: "DELETE", payload: id })
        } catch (error) {
            dispatch({ type: "ERROR", payload: error.message })
            throw error
        }
    }, []);


    return (
        <PostsContext.Provider
            value={{
                state,
                cargarPosts,
                obtenerPostPorId,
                agregarPost,
                editarPost,
                eliminarPost,
            }}
        >
            {children}
        </PostsContext.Provider>
    )
}
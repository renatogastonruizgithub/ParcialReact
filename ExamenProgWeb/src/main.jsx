import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import { PostsProvider } from './context/PostsContext.jsx'
import AppRouter from './router/AppRouter.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <PostsProvider>
       <AppRouter />
      </PostsProvider>
    </HashRouter>
  </StrictMode>,

)

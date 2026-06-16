import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import { PostsProvider } from './context/PostsContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import AppRouter from './router/AppRouter.jsx';
import 'sweetalert2/dist/sweetalert2.min.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <HashRouter>
        <PostsProvider>
          <AppRouter />
        </PostsProvider>
      </HashRouter>
    </ThemeProvider>
  </StrictMode>
)

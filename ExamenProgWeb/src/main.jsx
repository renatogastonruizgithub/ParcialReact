import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PostsProvider } from './context/PostsContext.jsx'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(


  <StrictMode>
    <ThemeProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
    </ThemeProvider>
  </StrictMode>,


)

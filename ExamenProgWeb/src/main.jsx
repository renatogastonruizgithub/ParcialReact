import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PostsProvider } from './context/PostsContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(


  <StrictMode>
    <PostsProvider>
      <App />
    </PostsProvider>
  </StrictMode>,


)

import { useState } from 'react'
import { useTheme } from './hooks/UseTheme.js'
import "./styles/theme.css"
function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <section >
        <h1>Get started</h1>
      </section>
      </>
      )
}

export default App


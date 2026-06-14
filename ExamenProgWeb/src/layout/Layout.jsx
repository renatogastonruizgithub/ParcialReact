import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTheme } from '../hooks/UseTheme.js'
import "../styles/theme.css"
import { usePosts } from '../hooks/usePosts.js'
import LoadingSpinner from '../components/LoadingSpinner';


export default function Layout() {
    const { theme } = useTheme();
  const { state } = usePosts();
    return (
        <>

            <section className={`app ${theme}`}> 
                <header>
                    <Navbar />
                </header>

            {state.loading && <LoadingSpinner />}
            {state.error && <ErrorMessage message={state.error} />}
         
                <main style={{ padding: '0 20px' }}>
                    <Outlet />   {/*   //aca vamos a inyectar el contenido de cada ruta */}
                </main>

               <Footer />
            </section>
        </>
    )
}

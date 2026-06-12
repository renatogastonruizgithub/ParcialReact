import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTheme } from '../hooks/UseTheme.js'
import "../styles/theme.css"

export default function Layout() {
    const { theme } = useTheme();

    return (
        <>
            <section className={`app ${theme}`}> 
                <header>
                    <Navbar />
                </header>

         
                <main style={{ padding: '0 20px' }}>
                    <Outlet />   {/*   //aca vamos a inyectar el contenido de cada ruta */}
                </main>

               <Footer />
            </section>
        </>
    )
}

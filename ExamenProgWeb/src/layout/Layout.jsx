import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'



export default function Layout() {
    return (
        <>
            <section >
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

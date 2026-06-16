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
            <section data-bs-theme={theme} className={`app ${theme} min-vh-100 d-flex flex-column`}>
                <header>
                    <Navbar />
                </header>
                <main className="flex-grow-1" style={{ padding: '0 20px' }}>
                    <Outlet />
                </main>
                <Footer />
            </section>
        </>
    )
}

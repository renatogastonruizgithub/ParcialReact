import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import PostsPage from '../page/PostsPage';
import PostDetailPage from '../page/PostDetailPage';
import NotFoundPage from '../page/NotFoundPage';
import PostFormPage from '../page/PostFormPage';

export default function AppRouter() {
    return (
        <>
            <Routes>
            {/*     envolvemos todas las rutas dentro del layout*/}
                <Route path="/" element={<Layout />}>
             {/*    agregamos las rutas hijas necesarias */} 
                    <Route index element={<PostsPage />} />
                    <Route path="/nuevoPost" element={<PostFormPage />} />
                    <Route path="/editarPost/:id" element={<PostFormPage />} />
                    <Route path="/detalle/:id" element={<PostDetailPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    )
}

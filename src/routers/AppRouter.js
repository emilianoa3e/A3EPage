import React from 'react'
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import Home from '../pages/Home'
import Services from '../pages/Service'
import News from '../pages/News'

function AppRouter() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/home' element={<Home />} />
                    <Route exact path='/about' element={<Home />} />
                    <Route exact path='/service/:id' element={<Services/>} />
                    <Route exact path='/news' element={<News />} />
                    <Route exact path='/contact' element={<Home />} />
                    <Route exact path='/*' element={<Navigate to='/' />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default AppRouter
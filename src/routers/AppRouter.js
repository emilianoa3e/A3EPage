import React from 'react'
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import Home from '../pages/Home'

function AppRouter() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/us' element={<Home />} />
                    <Route exact path='/services' element={<Home />} />
                    <Route exact path='/news' element={<Home />} />
                    <Route exact path='/contacts' element={<Home />} />
                    <Route exact path='/*' element={<Navigate to='/' />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default AppRouter
import React, {lazy, Suspense, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import Layout from "../components/shared/Layout";
const Home = lazy(()=> import('../pages/Home'));
const Us = lazy(()=> import('../pages/Us'));
const Services = lazy(()=> import('../pages/Service'));
const News = lazy(()=> import('../pages/News'))
const Sale = lazy(()=> import('../pages/contact/sale/Sale'))
const Recruitment = lazy(()=> import('../pages/contact/recruitment/Recruitment'))
function AppRouter() {
    return (
        <Suspense>
            <BrowserRouter>
                <ScrollToTop/>
                <Layout>
                    <Routes>
                        <Route exact path="/home" element={<Home/>}/>
                        <Route exact path="/about" element={<Us/>}/>
                        <Route exact path="/service/:id" element={<Services/>}/>
                        <Route exact path="/news" element={<News/>}/>
                        <Route exact path="/contact" element={<Home/>}/>
                        <Route exact path="/contact/sale" element={<Sale/>}/>
                        <Route exact path="/contact/recruitment" element={<Recruitment/>}/>
                        <Route exact path="/*" element={<Navigate to="/home"/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Suspense>
    )
        ;
}

function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return null;
}

export default AppRouter;

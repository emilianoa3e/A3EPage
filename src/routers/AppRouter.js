import React,{useEffect} from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Layout from "../components/shared/Layout";
import Home from "../pages/Home";
import Us from "../pages/Us";
import News from "../pages/News";
import Sale from "../pages/contact/sale/Sale";
import Recruitment from "../pages/contact/recruitment/Recruitment";
import Services from "../pages/Service"
function AppRouter() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Layout>
        <Routes>          
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<Us />} />
          <Route exact path="/service/:id" element={<Services />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/contact" element={<Home />} />
          <Route exact path="/contact/sale" element={<Sale />} />
          <Route exact path="/contact/recruitment" element={<Recruitment />} />         
          <Route exact path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return null;
}

export default AppRouter;

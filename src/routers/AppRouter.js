import React from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Layout from "../components/shared/Layout";
import Home from "../pages/Home";
import Services from "../pages/Service";
import News from "../pages/News";
import Sale from "../pages/contact/sale/Sale";
import Recruitment from "../pages/contact/recruitment/Recruitment";
import Us from "../pages/Us";

function AppRouter() {
  return (
    <BrowserRouter>
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

export default AppRouter;

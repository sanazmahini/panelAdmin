import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./../Home";
import PanelLayout from './../panelLayout/PanelLayout';
import Test from './../Test';
import DefaultPage from '../main/DefaultPage';
import AnalyticsPage from '../main/AnalyticsPage';
import EcommercePage from "../main/EcommercePage";
import ContentPage from '../main/ContentPage';
import LoginPage from "../main/LoginPage";
// import Register from "../sidebar/Register";
import RegisterPage from "../main/RegisterPage";
export default function RouteComponent() {
  return (
      <PanelLayout>
    <Routes>
      <Route path="/" element={<Home />} />
       {/*<Route path="/test" element={<Test />} /> */}
      <Route path="/DefaultPage" element={<DefaultPage />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/RegisterPage" element={<RegisterPage />} />
      <Route path="/AnalyticsPage" element={<AnalyticsPage />} />
      <Route path="/EcommercePage" element={<EcommercePage />} />
      <Route path="/ContentPage" element={<ContentPage />} />
    </Routes>
    </PanelLayout>
  );
}

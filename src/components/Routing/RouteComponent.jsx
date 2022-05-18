import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./../Home";
import PanelLayout from './../panelLayout/PanelLayout';
import Test from './../Test';
import DefaultPage from '../main/DefaultPage';
import AnalyticsPage from '../main/AnalyticsPage';
import EcommercePage from "../main/EcommercePage";
import ContentPage from '../main/ContentPage';
export default function RouteComponent() {
  return (
      <PanelLayout>
    <Routes>
      <Route path="/" element={<Home />} />
       {/*<Route path="/test" element={<Test />} /> */}
      <Route path="/DefaultPage" element={<DefaultPage />} />
      <Route path="/AnalyticsPage" element={<AnalyticsPage />} />
      <Route path="/EcommercePage" element={<EcommercePage />} />
      <Route path="/ContentPage" element={<ContentPage />} />
    </Routes>
    </PanelLayout>
  );
}

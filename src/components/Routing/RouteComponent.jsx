import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./../Home";
import PanelLayout from './../panelLayout/PanelLayout';
import Test from './../Test';

export default function RouteComponent() {
  return (
      <PanelLayout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Routes>
    </PanelLayout>
  );
}

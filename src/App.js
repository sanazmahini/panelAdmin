import "./App.scss";
import Header from "./components/header/Header";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouteComponent from './components/Routing/RouteComponent';

function App() {
  return (
    // <div className="App"> 
    //  <Header />
    // </div>
    <BrowserRouter>
      <RouteComponent />
    </BrowserRouter>
  );
}

export default App;

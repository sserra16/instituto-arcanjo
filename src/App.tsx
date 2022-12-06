import React from "react";
import "./index.css";
import Routes from "./routes";
import Header from "./components/Header";
import { BrowserRouter, useLocation } from "react-router-dom";

function App() {
  let inicial: boolean = window.location.pathname === "/" ? true : false;

  return (
    <BrowserRouter>
      {!inicial ? <Header /> : ""}
      <Routes />
    </BrowserRouter>
  );
}

export default App;

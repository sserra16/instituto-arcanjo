import React from "react";
import "./index.css";
import Header from "./components/Header";
import InstitutoArcanjo from "./components/InstitutoArcanjo";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-scroll z-0 scrollbar-thin">
      <Header />

      <section id="main">
        <Slider />
      </section>

      <section id="instituto">
        <InstitutoArcanjo />
      </section>
    </div>
  );
}

export default App;

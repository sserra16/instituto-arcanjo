import React from "react";
import Header from "../components/Header";
import InstitutoArcanjo from "../components/Home/LilianArcanjo";
import Slider from "../components/Home/Slider";
import Frase from "../components/Home/Frase";
import Servicos from "../components/Home/Servicos";
import Perfil from "../components/Home/Perfil";

export default function IndexPage() {
  return (
    <div className="h-full w-full">
      <section id="main">
        <Slider />
      </section>

      <section>
        <Frase />
      </section>

      <section id="lilian">
        <InstitutoArcanjo />
      </section>

      <section id="servicos">
        <Servicos />
      </section>

      <section id="perfil">
        <Perfil />
      </section>
    </div>
  );
}

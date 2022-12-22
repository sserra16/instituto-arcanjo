import React, { useEffect } from "react";
import Hero from "../components/Mentoria/Hero";
import Proposta from "../components/Mentoria/Proposta";
import Questions from "../components/Mentoria/Questions";
import Sensacao from "../components/Mentoria/Sensacao";

export default function Mentoria() {
  useEffect(() => {
    scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full h-full text-white">
      <section id="hero">
        <Hero />
      </section>

      <section id="questions">
        <Questions />
      </section>

      <section id="proposta">
        <Proposta />
      </section>

      <section id="sensacao">
        <Sensacao />
      </section>
    </div>
  );
}

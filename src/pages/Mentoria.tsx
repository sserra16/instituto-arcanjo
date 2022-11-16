import React, { useEffect } from "react";
import Hero from "../components/Mentoria/Hero";
import Questions from "../components/Mentoria/Questions";

export default function Mentoria() {
  useEffect(() => {
    scrollTo({ top: 0, behavior: "smooth" })
  }, []);

  return (
    <div className="w-full h-full bg-bgMentoriaPage bg-cover bg-no-repeat bg-fixed text-white">
      <section id="hero">
        <Hero />
      </section>

      <section id="questions">
        <Questions />
      </section>
    </div>
  );
}

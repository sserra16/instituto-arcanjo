import React from "react";
import Hero from "../components/Mentoria/Hero";
import Questions from "../components/Mentoria/Questions";

export default function Mentoria() {
  return (
    <div className="w-full h-full">
      <section id="hero">
        <Hero />
      </section>

      <section id="questions">
        <Questions />
      </section>
    </div>
  );
}

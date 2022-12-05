import React, { useEffect } from "react";
import Form from "../components/Ebook/Form";
import Hero from "../components/Mentoria/Hero";
import Questions from "../components/Mentoria/Questions";

export default function Mentoria() {
  useEffect(() => {
    scrollTo({ top: 0, behavior: "smooth" })
  }, []);

  return (
    <div className="w-full h-full text-white">
      <section id="hero">
        <Hero />
      </section>

      <section id="questions">
        <Questions />
      </section>
    </div>
  );
} 

import React from "react";
import Question from "./Question";
import { MentoriaTexts } from "../../utils/MentoriaText";

export default function Questions() {
  return (
    <div className="w-full pb-48 text-white bg-bgQuestions bg-center bg-cover bg-fixed">
      <div className="pt-[8rem] md:pl-32 px-5 flex flex-col gap-4 md:w-[40rem] w-full text-justify">
        <h1 className="w-[18rem] text-xl uppercase text-justify">
          Estou Rastreando meus clientes dos sonhos. Você é um deles?
        </h1>
        <div className="mt-12 flex flex-col gap-5">
          {MentoriaTexts.map((a, i) => (
            <Question count={i + 1} key={i} text={a} />
          ))}
        </div>
        <button className="button mt-6">Enviar</button>
      </div>
    </div>
  );
}

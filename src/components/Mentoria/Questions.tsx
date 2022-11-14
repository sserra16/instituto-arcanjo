import React from "react";
import Question from "./Question";
import { MentoriaTexts } from "../../utils/MentoriaText";

export default function Questions() {
  return (
    <div className="w-full pb-48">
      <div className="pt-[8rem] pl-32 flex flex-col gap-4 w-[40rem] text-justify">
        <h1 className="w-[18rem] text-xl uppercase text-justify">
          Estou Rastreando meus clientes dos sonhos. Você é um deles?
        </h1>
        <div className="mt-12 flex flex-col gap-5">
          {MentoriaTexts.map((a, i) => (
            <Question count={i + 1} key={i} text={a} />
          ))}
        </div>
      </div>
    </div>
  );
}

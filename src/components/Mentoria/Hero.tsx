import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Hero() {
  return (
    <div className="w-full md:h-screen h-full px-10 bg-bgMentoriaPage bg-cover bg-no-repeat bg-fixed pb-4">
      <div className="pt-[18rem] md:pl-32 flex flex-col gap-4 md:w-[40rem] w-full text-justify">
        <h1 className="text-2xl uppercase text-primary font-bold">
          A peça que faltava para você
        </h1>
        <h2 className="uppercase text-xl font-normal text-justify">
          Chegou a hora de descobrir quais são os segredos dos empresários mais
          bem sucedidos do brasil
        </h2>
        <div className="flex flex-col gap-1 mt-4">
          <p className="font-light">
            E se você pudesse (com um passo a passo bem detalhado) ser o próximo
            a ter uma empresa milionária
          </p>
          <p className="font-light">
            Entenda tudo sobre como fazer parte desse grupo seleto de pessoas.
          </p>
          <h2 className="mt-16 font-semibold text-xl text-zinc-300">
            ...e como obter a mentoria por meses{" "}
            <span className="text-primary">DE GRAÇA!</span>
          </h2>
        </div>
        <div className="cursor-pointer hover:translate-y-2 transition-all duration-500 w-2">
          <a href="#questions">
            <IoIosArrowDown size={36} />
          </a>
        </div>
      </div>
    </div>
  );
}

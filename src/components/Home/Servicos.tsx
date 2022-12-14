import React from "react";
import { useNavigate } from "react-router-dom";

export default function Servicos() {
  const history = useNavigate();

  return (
    <div className="h-screen sm:px-32 w-full px-5 pt-[10rem] flex flex-col items-center gap-8">
      <h1 className="uppercase text-4xl font-title">Serviços</h1>
      <div className="grid grid-cols-2 grid-rows-3 h-2/3 sm:w-3/5 w-full">
        <div
          className="overflow-hidden flex row-span-3 items-center justify-center cursor-pointer"
          onClick={() => history("/mentoria")}>
          <div className="bg-bgMentoria w-full h-full hover:scale-105 transition-all flex items-center justify-center bg-[30%] bg-cover">
            <h1 className="md:text-4xl !text-xl text-white uppercase tracking-wider">
              Mentoria
            </h1>
          </div>
        </div>
        <div
          className="overflow-hidden flex row-span-3 items-center justify-center cursor-pointer"
          onClick={() => history("/palestras")}>
          <div className="bg-bgProdutos w-full h-full hover:scale-105 transition-all flex items-center justify-center bg-center bg-cover">
            <h1 className="md:text-4xl !text-xl text-white text-center uppercase tracking-wider">
              Palestras e Treinamentos
            </h1>
          </div>
        </div>
        {/* Adicionar Divs */}
      </div>
    </div>
  );
}

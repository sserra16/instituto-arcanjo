import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Inicial() {
  const history = useNavigate();

  return (
    <div className="w-screen h-screen bg-black flex flex-col gap-20 items-center px-2 md:px-16 py-8">
      <div className="w-full max-w-[60rem] bg-white flex items-center px-10 h-2/6 rounded-md bg-InicialMentoria bg-cover bg-center shadow-[-2px_8px_80px_-19px_rgba(255,126,75,0.6)]">
        <button
          onClick={() => history("/mentoria")}
          className="button flex items-center gap-2 !px-8 !py-2 md:!py-4 md:!px-16 text-sm sm:text-lg shadow-lg hover:brightness-75 transition-all">
          Saiba Mais <AiOutlineArrowRight />
        </button>
      </div>
      <div className="w-full max-w-[60rem] bg-white flex items-center px-10 h-2/6 rounded-md bg-InicialMentoria bg-cover bg-center shadow-[-2px_8px_80px_-19px_rgba(255,126,75,0.6)]">
        <button className="button flex items-center gap-2 !px-8 !py-2 md:!py-4 md:!px-16 text-sm sm:text-lg shadow-lg hover:brightness-75 transition-all">
          Saiba Mais <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}

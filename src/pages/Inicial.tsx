import React from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';
 
export default function Inicial() {
  return (
    <div className="w-screen h-screen bg-black flex flex-col gap-10 items-center justify-between px-16 py-8">
      <div className="w-[65rem] bg-white flex items-center px-10 h-[20rem] rounded-md bg-InicialMentoria bg-cover bg-center shadow-[-2px_8px_80px_-3px_rgba(255,126,75,0.6)]">
        <button className="button flex items-center gap-2 !px-16 !py-4 text-xl shadow-lg hover:brightness-75 transition-all">Saiba Mais <AiOutlineArrowRight/></button>
      </div>

    </div>
  );
}

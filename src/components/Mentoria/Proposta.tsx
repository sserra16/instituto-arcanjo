import React from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

export default function Proposta() {
  return (
    <div className="w-full flex gap-8 items-center flex-col h-full bg-bgSmoke bg-cover bg-fixed py-36 md:px-72 px-8 text-white">
    
      <h1 className="uppercase border-dotted border-b pb-3 px-[-40] text-2xl text-white font-title">
        Eu quero te fazer uma proposta indecente
      </h1>

      <h2 className="uppercase text-xl font-bold text-primary w-full max-w-[40rem] text-center">
        ME DÊ 6 MESES PARA TORNAR VOCÊ MEU CASO DE SUCESSO E EU TE ENTREGO O QUE
        FALTA PARA VOCÊ…
      </h2>

      <div className="border p-8 flex items-center justify-between">
        <div className="flex flex-col w-1/2 gap-6">
          <h1 className="uppercase font-bold">
            sim, você provavelmente sente que falta uma peça pra você, certo?
          </h1>
          <div className="bg-primary w-1/2 h-1"></div>
          <h1>
            Se acertei sobre quem é você e há quanto tempo está no marketing
            digital, você certamente reconhece essa sensação.
          </h1>
        </div>
        <div className="h-full w-[1px] bg-primary"></div>
        <div className="flex flex-col w-1/2 gap-6 px-6">
          <h1 className="text-primary">
            ESSA SENSAÇÃO HABITA <span className="font-bold block">TODOS OS NÍVEIS DO MERCADO:</span>
          </h1>
          <div className="flex gap-2 items-center">
            <BsFillArrowUpRightCircleFill className="text-primary" />
            <p>
              Quem está em 6 dígitos e <span className="font-bold block">não consegue ir para 7.</span>
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <BsFillArrowUpRightCircleFill className="text-primary" />
            <p>
              Quem está em 5 dígitos e <span className="font-bold block">não consegue ir para 6.</span>
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <BsFillArrowUpRightCircleFill className="text-primary" />
            <p>
              Quem está em travado no <span className="font-bold block">começo da jornada.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

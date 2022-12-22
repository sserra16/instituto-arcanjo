import React from "react";
import * as Slider from "@radix-ui/react-slider";

export default function Sensacao() {
  return (
    <div className="w-full flex gap-16 items-center flex-col h-screen bg-bgSensacao bg-cover bg-fixed pt-36 md:px-48 px-8 text-white">
      <Slider.Root
        className="relative flex items-center select-none touch-none w-[200px] data-[orientation='horizontal']:h-[20px] data-[orientation='vertical']:w-[20px] data-[orientation='vertical']:h-[100px] data-[orientation='vertical']:flex-col"
        defaultValue={[50]}
        max={100}
        step={1}
        aria-label="Volume">
        <Slider.Track className="bg-primary relative grow rounded-full data-[orientation='horizontal']:h-[3px] data-[orientation='vertical']:w-[3px]">
          <Slider.Range className="absolute bg-white rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb className="flex outline-none items-center justify-center w-5 h-5 bg-white shadow-sm rounded-full">
          <div className="rounded-full h-3 w-3 bg-primary"></div>
        </Slider.Thumb>
      </Slider.Root>

      <h1 className="uppercase text-white font-title text-3xl">
        Reconhece essa sensação?
      </h1>

      <p className="text-lg text-justify">
        A sensação de que você não está avançando por estar faltando alguma
        coisa? Ou a intuição de que talvez, forçando só mais um pouquinho o jogo
        vire? Então, você derrama mais suor, mais tempo, mais noites indo para a
        cama tarde e ainda assim não consegue bater aquele resultado que outras
        pessoas parecem estar atingindo com tanta facilidade.
      </p>

      <h1 className="text-white font-title text-4xl pb-4 border-b-[1px] border-primary">
        Você não é a primeira pessoa.
      </h1>

      <p className="text-lg text-justify">
        Nos últimos 3 anos vi pessoas dos mais variados faturamentos quebrando.
        Desde aqueles que faturavam 30 mil por mês, aos que faturavam 500 mil
        por mês.
      </p>
    </div>
  );
}

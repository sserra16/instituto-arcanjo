import React from "react";

export default function InstitutoArcanjo() {
  return (
    <div className="h-screen md:px-32 px-10 px-auto flex flex-col items-center pt-32 w-full">
      <h1 className="uppercase text-4xl hidden sm:flex font-title">Sobre</h1>

      <div className="flex h-3/4 items-center justify-center gap-48">
        <div className="hidden md:block bg-pessoa h-full w-[40rem] bg-contain bg-no-repeat bg-center"></div>
        <div className="w-full flex flex-col gap-3">
          <h1 className="text-2xl uppercase font-title tracking-wider font-semibold text-preto">
            Instituto Arcanjo Treinamentos
          </h1>
          <p>
            A história da empresa é protagonizada por Lilian Arcanjo,
            empreendendo desde a adolescência Lilian tem mais de 20 anos de
            experiência com vendas e marketing. Os serviços de consultoria para
            empresas nasceu depois que ela precisou se reinventar aos 24 anos e
            recomeçar a vida profissional do absoluto zero, diante do
            conhecimento que possui conseguiu de maneira prática e leve ajudar
            os empresários que se sentiam perdidos para criar estratégias de
            vendas para seus negócios. Se formou como palestrante e treinadora
            pelo instituto Deandhela e desde então viaja pelo Brasil levando sua
            metodologia para eventos corporativos, eventos de empreendedorismo e
            vendas, e empresas de médio e grande porte que possuem colaboradores
            que precisam ser treinados para vender direta e indiretamente. Em
            2022 recebeu um prêmio por ser uma aluna destaque do instituto
            Deandhela.
          </p>
        </div>
      </div>
    </div>
  );
}

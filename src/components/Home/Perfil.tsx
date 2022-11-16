import React from "react";
import * as Select from "@radix-ui/react-select";
import { IoIosArrowDown } from "react-icons/io";

export default function Perfil() {
  return (
    <div className="h-screen px-32 w-full pt-[10rem] flex flex-col items-center gap-8">
      <h1 className="uppercase text-4xl font-title">Perfil</h1>
      <h2>
        Faça o teste DISC para saber o seu perfil comportamental e o selecione
        abaixo!
      </h2>
      <a
        href="https://www.pactorh.com.br/teste-disc/disc/faca-agora-teste-disc/"
        target={"_blank"}>
        <button className="button">
          Faça Agora!
        </button>
      </a>

      <Select.Root>
        <Select.Trigger className="flex gap-2 items-center rounded-md px-4 py-2 bg-white shadow-md hover:bg-zinc-100 transition-all">
          <Select.Value placeholder={"Selecione seu perfil"} />
          <IoIosArrowDown size={18} />
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className="overflow-hidden bg-white rounded-md shadow-md">
            <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-white cursor-default" />
            <Select.Viewport className="p-2">
              <Select.Group>
                <Select.Item value="1" className="selectItem">
                  <Select.ItemText>Dominância</Select.ItemText>
                </Select.Item>
                <Select.Item value="2" className="selectItem">
                  <Select.ItemText>Influência</Select.ItemText>
                </Select.Item>
                <Select.Item value="3" className="selectItem">
                  <Select.ItemText>Estabilidade</Select.ItemText>
                </Select.Item>
                <Select.Item value="4" className="selectItem">
                  <Select.ItemText>Conformidade</Select.ItemText>
                </Select.Item>
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-white cursor-default" />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}

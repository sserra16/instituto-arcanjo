import React, { useState, useEffect, useCallback } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import * as Checkbox from "@radix-ui/react-checkbox";

interface IQuestion {
  text: string;
  count: number;
}

export default function Question({ text, count }: IQuestion) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="flex gap-2 items-center">
        <BiRightArrowAlt />
        Pergunta {count}
      </h1>
      <div className="flex items-center gap-3">
        <Checkbox.Root
          className={
            "bg-white !w-6 h-6 rounded-md focus:outline outline-primary outline-1 flex items-center justify-center shadow-md cursor-pointer"
          }>
          <Checkbox.Indicator>
            <BsCheck size={20} color={'black'} />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <p className="text-md font-light w-[30rem]">{text}</p>
      </div>
    </div>
  );
}

import React, { useRef, useState } from "react";
import { Form } from "@unform/web";
import Input from "../components/Input";
import { palestrasEmail } from "../utils/mail";
import { motion } from "framer-motion";
import { AiOutlineCheck } from 'react-icons/ai';

type PalestrasType = {
  name: string;
  email: string;
  tel: string;
  cidade: string;
  message: string;
};

export default function Palestras() {
  const formRef = useRef(null);
  const [load, setLoad] = useState(false);

  async function handleSubmit(data: PalestrasType) {
    await palestrasEmail(
      data.name,
      data.email,
      data.tel,
      data.cidade,
      data.message
    );
    setLoad(true);
  }

  return (
    <div className="h-full w-full items-center flex justify-center bg-bgProdutosPage bg-cover bg-center">
      {!load ? (
        <Form
          ref={formRef}
          className="bg-white rounded-md flex flex-col gap-6 p-12"
          onSubmit={handleSubmit}>
          <h1>GOSTARIA DE MAIS INFORMAÇÕES SOBRE ESSE SERVIÇO?</h1>
          <div className="h-[1px] bg-zinc-400 w-full"></div>
          <Input
            type="text"
            name="name"
            className="input !py-3 !rounded-md"
            placeholder="Nome"
          />
          <Input
            type="text"
            name="email"
            className="input !py-3 !rounded-md"
            placeholder="Email"
          />
          <div className="flex items-center gap-3">
            <Input
              type="text"
              name="tel"
              className="input !py-3 !rounded-md"
              placeholder="Telefone"
            />
            <Input
              type="text"
              name="cidade"
              className="input !py-3 !rounded-md"
              placeholder="Cidade"
            />
          </div>
          <Input
            textarea
            name="message"
            id=""
            className="input"
            textPlaceholder="Mensagem"
          />
          <button className="button" type="submit">
            Enviar
          </button>
        </Form>
      ) : (
        <div className="bg-white py-16 px-32 rounded-md flex flex-col gap-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            className="rounded-full bg-green-400 p-10"
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <AiOutlineCheck size={34} color={"white"} />
          </motion.div>
          <h1>Email enviado!</h1>
        </div>
      )}
    </div>
  );
}

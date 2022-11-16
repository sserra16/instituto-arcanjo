import React, { useState } from "react";
import { sendEmail } from "../../utils/mail";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="h-screen md:px-32 px-16 w-full pt-[10rem] flex flex-col items-center gap-8 bg-bgProdutosPage bg-cover bg-center">
      <h1 className="uppercase font-title text-2xl text-white">
        Baixar o Ebook
      </h1>
      <div className="py-4 px-4 w-full max-w-[50rem] bg-white rounded-md">
        <form action="" className="flex flex-col">
          <div className="flex gap-3 w-full flex-col">
            <div className="flex w-full gap-10">
              <div className="flex w-full flex-col">
                <label htmlFor="name">Nome: </label>
                <input
                  className="input"
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  name="name"
                  type="text"
                />
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="email">Email: </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="input"
                  id="email"
                  name="email"
                  type="email"
                />
              </div>
            </div>
            <a href="/src/assets/ebook.pdf" download className="w-full">
              <button
                className="button w-full"
                type="button"
                onClick={() => sendEmail(name, email)}
                >
                Baixar
              </button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

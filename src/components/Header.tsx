import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [position, setPosition] = useState();

  return (
    <header
      className={`fixed top-0 py-3 md:px-32 px-10 z-20 items-center flex justify-between bg-transparent w-full rounded-b-md`}>
      <img src="/logo.svg" width={120} alt="" />

      <FaBars size={22} className="text-white cursor-pointer" />
    </header>
  );
}

// <nav className='flex gap-6 text-sm'>
// <a href="">Produtos</a>
// <a href="">Consultorias</a>
// <a href="">Mentorias</a>
// <a href="">Palestras</a>
// <a href="">Treinamentos</a>
// </nav>

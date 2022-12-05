import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [header, setHeader] = useState(false);
  const history = useNavigate();

  const changeHeader = () => {
    if (window.scrollY > 60) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeader);

    return () => {
      window.removeEventListener("scroll", changeHeader);
    };
  }, [window.scrollY]);

  return (
    <>
      <Dialog.Root>
        <AnimatePresence>
          <motion.header
            initial={{ y: -50 }}
            whileInView={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ bounce: 0, duration: 0.4 }}
            className={`fixed ${
              header ? "hidden" : ""
            } top-0 py-3 md:px-32 px-10 z-20 items-center flex justify-between w-full rounded-b-md`}>
            <img
              src="/logo.svg"
              className="cursor-pointer"
              width={120}
              alt=""
              onClick={() => history("/")}
            />
            <Dialog.Trigger asChild>
              <FaBars size={22} className="text-white cursor-pointer" />
            </Dialog.Trigger>
          </motion.header>
        </AnimatePresence>

        <Dialog.Portal>
          <Dialog.Overlay className="bg-darkAlpha fixed inset-0 z-40 grid place-items-center">
            <Dialog.Content className="p-4 flex flex-col gap-4 !outline-none">
              <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="flex flex-col items-center gap-3 !text-white nav-modal">
                <Dialog.Close asChild>
                  <a href="#lilian">Instituto Arcanjo</a>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <a href="#servicos">Serviços</a>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <a href="#perfil">Perfil</a>
                </Dialog.Close>
              </motion.nav>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
        <AnimatePresence>
          {header && (
            <motion.header
              initial={{ y: -50 }}
              whileInView={{ y: 0 }}
              exit={{ y: -100 }}
              transition={{ bounce: 0, duration: 0.4 }}
              className={`fixed top-0 py-3 md:px-32 px-10 z-20 items-center flex justify-between bg-white w-full rounded-b-md`}>
              <img
                src="/logo.svg"
                width={120}
                alt=""
                className="cursor-pointer"
                onClick={() => history("/")}
              />

              <nav className="md:flex hidden gap-4 text-sm">
                <a href="#lilian">Instituto Arcanjo</a>
                <a href="#servicos">Serviços</a>
                <a href="#perfil">Perfil</a>
              </nav>

              <Dialog.Trigger asChild>
                <FaBars
                  size={22}
                  className="text-preto cursor-pointer md:hidden flex"
                />
              </Dialog.Trigger>

              <div className="md:w-44 hidden md:flex"></div>
            </motion.header>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </>
  );
}

import React from "react";
import { motion } from "framer-motion";

export default function Frase() {
  return (
    <div className="h-56 w-full bg-primary flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ bounce: 0, duration: 0.8 }}
        className="px-4 gap-2 md:px-10 flex flex-col items-center">
        <h1 className="md:text-2xl text-lg' uppercase">
          Tenha um time de
          <span className="text-sky-800 font-semibold"> visionários</span>
        </h1>
      </motion.div>
    </div>
  );
}

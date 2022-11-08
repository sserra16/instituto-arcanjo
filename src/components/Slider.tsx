import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Slider() {
  const imgs = ["bg-bg1", "bg-bg2", "bg-bg3"];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderLength = imgs.length;
  let slideInterval: number;
  let autoScroll = true;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <AnimatePresence mode="sync">
      {imgs.map(
        (img, index) =>
          index === currentSlide && (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ bounce: 0, duration: 1 }}
              className={`h-screen fixed top-0 w-screen ${img} bg-bottom bg-cover -z-20`}></motion.div>
          )
      )}
    </AnimatePresence>
  );
}

import React from "react";
import HeroSlider, { Slide, Overlay, Nav, AutoplayButton } from "hero-slider";

export default function Slider() {
  return (
    <HeroSlider
      height="95vh"
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
      }}
      autoplay={{
        autoplayDuration: 4000,
        autoplayDebounce: 0,
      }}>

      <Slide
        background={{
          backgroundColor: "#8A8A8A",
          backgroundImageSrc: "./src/assets/bg5.jpg",
          backgroundAnimation: "fade",
        }}
      />
6
      <Slide
        background={{
          backgroundColor: "#8A8A8A",
          backgroundImageSrc: "./src/assets/bg4.jpg",
          backgroundAnimation: "fade",
        }}
      />

      <Slide
        background={{
          backgroundColor: "#8A8A8A",
          backgroundImageSrc: "./src/assets/bg3.jpg",
          backgroundAnimation: "fade",
        }}
      />

      <Nav />
    </HeroSlider>
  );
}

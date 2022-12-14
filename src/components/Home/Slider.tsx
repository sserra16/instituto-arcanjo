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
          backgroundImageSrc: "/bg5.jpg",
          backgroundAnimation: "fade",
        }}
      />

      <Slide
        background={{
          backgroundColor: "#8A8A8A",
          backgroundImageSrc: "/bg6.jpeg",
          backgroundAnimation: "fade",
        }}
      />

      <Slide
        background={{
          backgroundColor: "#8A8A8A",
          backgroundImageSrc: "/bg3.jpg",
          backgroundAnimation: "fade",
        }}
      />

      <Nav />
    </HeroSlider>
  );
}

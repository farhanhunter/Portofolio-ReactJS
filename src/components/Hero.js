import React, { useState } from "react";
import WhatsAppButton from "../assets/WhatsAppButtonGreenLarge.svg";
import WhatsAppButtonHover from "../assets/WhatsAppButtonWhiteLarge.svg";

function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section
      id="hero"
      className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold">
        Hi, I'm Farhan Adi Saputra
      </h1>
      <p className="text-xl md:text-2xl mt-4">I'm a Fullstack Web Developer</p>
      <a
        aria-label="Chat on WhatsApp"
        href="https://wa.me/6282134294964"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          alt="Chat on WhatsApp"
          src={isHovered ? WhatsAppButtonHover : WhatsAppButton}
        />
      </a>
    </section>
  );
}

export default Hero;

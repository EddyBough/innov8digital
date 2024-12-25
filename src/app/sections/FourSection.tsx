import React from "react";
import Image from "next/image";
import BlurPurpleEffect from "@/public/img/blur-purple.png";
import { AppleCardsCarousel } from "@/src/components/features/Carousel";

export default function FourSection() {
  return (
    <section className="w-screen relative overflow-hidden">
      <Image
        src={BlurPurpleEffect}
        alt=""
        width={400}
        height={1200}
        priority
        className="absolute md:h-auto mt-96 md:mt-0 h-[55rem] w-[35rem] right-0 top-0 -z-10 object-cover"
        quality={100}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full text-center">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-16 bg-title-gradient inline-block text-transparent bg-clip-text">
            Nos réalisations
          </h2>
          <h1 className=" font-extrabold text-5xl">
            A la pointe de l’innovation digitale
          </h1>
          <div>
            <AppleCardsCarousel />
          </div>
        </div>
        <div className="flex justify-center w-full"></div>
      </div>
    </section>
  );
}

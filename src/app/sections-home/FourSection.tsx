import Carousel from "@/components/features/Carousel";
import Image from "next/image";
import React from "react";

export default function FourSection() {
  return (
    <section className="w-screen h-full font-aeonik relative overflow-hidden pb-16">
      <Image
        src={"/img/blur-purple.png"}
        alt="flou violet"
        width={400}
        height={1200}
        priority
        className="absolute md:h-auto mt-96 md:mt-0 h-[55rem] w-[35rem] right-0 top-0 -z-10 object-cover"
        quality={100}
      />

      <div className="max-w-7xl mx-auto px-4 py-28 mb-16">
        <div className="w-full text-center">
          <h2 className="text-xl sm:text-4xl bg-title-gradient inline-block text-transparent bg-clip-text">
            Nos réalisations
          </h2>
          <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
            A la pointe du digital
          </h3>
          <div className="mb-0 md:mb-36 lg:mb-0">
            <Carousel />
          </div>
        </div>
        <div className="flex justify-center w-full"></div>
      </div>
    </section>
  );
}

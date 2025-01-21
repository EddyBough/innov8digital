import React from "react";
import Carousel from "@/components/features/Carousel";

export default function SectionCarousel() {
  return (
    <section>
      {/* Portfolio section */}
      <div className="text-center ">
        <h2 className="text-xl sm:text-4xl bg-title-gradient inline-block text-transparent bg-clip-text">
          Nos réalisations
        </h2>
        <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
          A la pointe de l&apos;innovation digitale
        </h3>
        <div className="w-full overflow-hidden">
          <Carousel />
        </div>
      </div>
    </section>
  );
}

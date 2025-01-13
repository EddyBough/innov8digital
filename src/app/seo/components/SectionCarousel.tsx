import React from "react";
import Carousel from "@/components/features/Carousel";

export default function SectionCarousel() {
  return (
    <section>
      {/* Portfolio section */}
      <div className="text-center ">
        <h2 className="text-xl sm:text-4xl font-bold bg-title-gradient inline-block text-transparent bg-clip-text">
          Nos réalisations
        </h2>
        <h3 className="text-2xl lg:text-6xl my-3 md:my-5 font-bold text-center mb-6 md:mb-10 lg:mb-20">
          A la pointe de l&apos;innovation digitale
        </h3>
        <div className="w-full overflow-hidden">
          <Carousel />
        </div>
      </div>
    </section>
  );
}

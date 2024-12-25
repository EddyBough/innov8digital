"use client";
import Image from "next/image";
import { Button } from "../../components/ui/button";

export default function FirstSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden">
      <Image
        src={"/img/MainBlurBlue.svg"}
        alt=""
        width={1100}
        height={150}
        priority
        className="absolute md:h-auto h-[35rem] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl object-cover "
        quality={100}
      />

      <div className="relative z-20 rounded-3xl p-8 max-w-2xl w-full text-center backdrop-blur-sm">
        <div className="space-y-6">
          <p className="text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-wider">
            Agence Web Innov8 Digital
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Solutions digitales
            <br />
            sur mesure
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-white font-medium max-w-xl mx-auto">
            Tout ce dont vous avez besoin, au même endroit, pour tout les
            budgets
          </p>

          <Button className="bg-black text-white px-6 py-6 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-gray-800 transition-colors">
            Découvrir nos services
          </Button>
        </div>
      </div>
    </section>
  );
}

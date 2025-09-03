"use client";
import CardSection from "@/components/ui/CardSection";
import Image from "next/image";

export default function SecondSectionExpertise() {
  return (
    <section className="w-screen relative overflow-hidden lg:pb-60 pt-9">
      <Image
        src={"/img/blur-yellow.png"}
        alt=""
        width={400}
        height={1200}
        loading="lazy"
        className="absolute md:h-auto mt-96 md:mt-0 h-[55rem] w-[35rem] lg:w-[45rem] left-0 top-0 -z-10 object-cover"
        quality={75}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full text-center">
          <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
            Pourquoi choisir notre agence ?
          </h2>
          <h3 className="lg:text-6xl text-4xl font-bold text-center lg:mb-20 mb-10">
            Nous croyons à la qualité plutôt qu&apos;à la quantité
          </h3>
        </div>
        <div className="flex justify-center w-full ">
          <CardSection />
        </div>
      </div>
    </section>
  );
}

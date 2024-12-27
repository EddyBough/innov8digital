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
        priority
        className="absolute md:h-auto mt-96 md:mt-0 h-[55rem] w-[35rem] lg:w-[45rem] left-0 top-0 -z-10 object-cover"
        quality={100}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full text-center">
          <h2 className="text-xl sm:text-4xl  font-aeonik font-bold bg-title-gradient inline-block text-transparent bg-clip-text">
            Pourquoi choisir notre agence ?
          </h2>
          <h3 className="lg:text-6xl text-2xl font-bold text-center lg:mb-20 mb-10">
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

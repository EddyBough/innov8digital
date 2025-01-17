"use client";
import React from "react";
import Image from "next/image";
import FeatureCard from "@/components/ui/FeatureCard";

export default function SectionCreateWebSite() {
  return (
    <section>
      <Image
        src={"/img/blur-purple.png"}
        alt=""
        width={400}
        height={1200}
        priority
        className="absolute md:h-auto mt-96 md:mt-0 h-[55rem] w-[35rem] right-0 top-0 -z-10 object-cover"
        quality={100}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full text-center mt-20">
          <h2 className="text-xl sm:text-4xl font-bold bg-title-gradient inline-block text-transparent bg-clip-text">
            Création de site web
          </h2>
          <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
            Transformez vos idées en solutions digitales uniques{" "}
          </h3>
        </div>

        <div className="text-center mb-12">
          <FeatureCard
            title="Création de site web & Applications sur mesures"
            description="Chez Innov8Digital, nous savons que chaque entreprise est unique. C'est pourquoi nos sites web sur mesure sont bien plus qu'une simple vitrine : ce sont des outils puissants, conçus spécifiquement pour répondre à vos besoins et refléter votre identité et évoluer, comme vous."
            imageSrc="/img/meating.png"
            imageAlt="Équipe Innov8Digital en réunion"
            buttonHref="https://tidycal.com/boughanmieddy8/audit-de-votre-projet"
          />
        </div>
      </div>
    </section>
  );
}

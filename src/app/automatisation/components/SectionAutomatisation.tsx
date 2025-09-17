"use client";
import React from "react";
import Image from "next/image";
import FeatureCard from "@/components/ui/FeatureCard";

export default function SectionAutomatisation() {
  return (
    <section>
      <Image
        src={"/img/blur-blue.png"}
        alt=""
        width={400}
        height={1200}
        priority
        className="absolute md:h-auto mt-96 md:mt-0 h-[55rem] w-[35rem] right-0 top-0 -z-10 object-cover"
        quality={100}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full text-center mt-20">
          <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
            Automatisation & Intelligence artificielle
          </h2>
          <h1 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
            Automatisez vos processus pour gagner en efficacité
          </h1>
        </div>

        <div className="text-center mb-12">
          <FeatureCard
            title="Solutions d'automatisation intelligentes"
            description="Transformez votre entreprise grâce à nos solutions d'automatisation sur mesure. Nous créons des systèmes RAG pour exploiter vos données, des assistants MCP pour optimiser vos processus, et des chatbots intelligents pour améliorer votre relation client. Réduisez vos coûts, gagnez du temps et libérez le potentiel de vos équipes."
            imageSrc="/img/aiapps.webp"
            imageAlt="Solutions d'automatisation IA"
            buttonHref="https://tidycal.com/boughanmieddy8/audit-de-votre-projet"
          />
        </div>
      </div>
    </section>
  );
}

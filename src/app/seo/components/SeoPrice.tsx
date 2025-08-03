"use client";
import React from "react";
import Image from "next/image";
import PricingCard, { Feature } from "@/components/ui/PricingCard";

export default function SeoPrice() {
  const pricingPlans = [
    {
      title: "SEO & Marketing Digital complet",
      subtitle: "Votre accompagnement de A à Z pour un succès digital",

      price: "Sur devis",
      features: [
        { text: "Audit & Analyse ", enabled: true },
        { text: "Optimisation SEO ", enabled: true },
        { text: "Mise en place d'outil de mesure ", enabled: true },
        { text: "Suivi des actions mise en place", enabled: true },
        { text: "Création de contenu", enabled: true },
        { text: "Optimisation SEO ", enabled: true },
        { text: " Création et gestion des réseaux sociaux", enabled: true },
        {
          text: "Création et diffusion de contenus engageants : articles, newsletters etc...",
          enabled: true,
        },
      ] as Feature[],
    },
  ];
  return (
    <section>
      <Image
        src={"/img/blur-pink.png"}
        alt="effet de flou pink"
        width={400}
        height={1200}
        priority
        className="absolute md:h-auto md:mt-0 h-[55rem] w-full md:w-[35rem] right-0 bottom-0 -z-10 object-cover"
        quality={100}
      />

      {/* Pricing section header */}
      <div className="text-center mt-12 md:mt-20">
        <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
          SEO & Marketing Digital
        </h2>
        <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
          On fabrique votre succès digital
        </h3>
      </div>
      {/* Pricing cards container */}
      <div className="mt-16 lg:mt-28 mb-24 lg:mb-36 flex flex-col lg:flex-row justify-center items-stretch gap-6 lg:gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="w-full lg:w-auto flex-shrink-0 lg:flex-shrink"
          >
            <PricingCard
              {...plan}
              buttonHref="https://tidycal.com/boughanmieddy8/audit-de-votre-projet"
              className="h-full mb-8 max-w-sm mx-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";
import React from "react";
import Image from "next/image";
import PricingCard, { Feature } from "@/components/ui/PricingCard";

export default function SeoPrice() {
  const pricingPlans = [
    {
      title: "Stratégie digitale complete",
      showStartingFrom: false,
      price: "Sur devis",
      features: [
        { text: "Audit & Analyse ", enabled: true },
        { text: "Optimisation SEO ", enabled: true },
        {
          text: "Marketing de Contenu: Création et diffusion de contenus engageants : articles, newsletters, publications sociales pour renforcer votre image et captiver votre audience.",
          enabled: true,
        },
      ] as Feature[],
    },
  ];
  return (
    <section>
      <Image
        src={"/img/blur-pink.png"}
        alt=""
        width={400}
        height={1200}
        priority
        className="absolute md:h-auto md:mt-0 h-[55rem] w-full md:w-[35rem] right-0 bottom-0 -z-10 object-cover"
        quality={100}
      />

      {/* Pricing section header */}
      <div className="text-center mt-12 md:mt-20">
        <h2 className="text-xl sm:text-4xl font-bold bg-title-gradient inline-block text-transparent bg-clip-text">
          Développement de site web
        </h2>
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

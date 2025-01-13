"use client";
import React from "react";
import PricingCard, { type Feature } from "@/components/ui/PricingCard";
import { Button } from "@/components/ui/button";

export default function SectionDigitalBoost() {
  const pricingPlans = [
    {
      title: "Stratégie digitale complète",
      price: "Sur devis",
      showStartingFrom: false,
      features: [
        { text: "Audit & Analyse ", enabled: true },
        {
          text: "Optimisation SEO ",
          enabled: true,
        },
        {
          text: "Marketing de Contenu: Création et diffusion de contenus engageants : articles, newsletters, publications sociales pour renforcer votre image et captiver votre audience.",
          enabled: true,
        },
        { text: "Accompagnement et suivi", enabled: true },
      ] as Feature[],
    },
  ];
  return (
    <section className="w-screen relative overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="w-full text-center">
          <h2 className="text-xl sm:text-4xl font-aeonik font-bold bg-title-gradient inline-block text-transparent bg-clip-text">
            SEO & boost digital
          </h2>
          <h3 className="lg:text-6xl text-2xl font-bold text-center lg:mb-20 mb-10">
            Boostez votre image
          </h3>
        </div>

        <div className="flex flex-col md:flex-row  mb-20 justify-center items-center gap-8 w-full">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              buttonHref="https://tidycal.com/boughanmieddy8/audit-de-votre-projet"
            />
          ))}
        </div>
        <div className=" py-20 px-4 text-center rounded-3xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Développement spécifique
            </h2>
            <p className="text-lg md:text-xl my-20">
              Nous offrons des services de développement spécifique, facturés à
              l&apos;heure, pour répondre à des besoins uniques avec flexibilité
              et transparence.
            </p>
            <Button className="bg-black text-white hover:bg-gray-800 rounded-lg px-8 py-6 my-10 text-lg">
              Prendre rendez-vous
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

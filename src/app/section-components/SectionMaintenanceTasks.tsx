"use client";
import React from "react";
import Image from "next/image";
import PricingCard, { type Feature } from "@/components/ui/PricingCard";
import SectionDigitalBoost from "./SectionDigitalBoost";

export default function SectionMaintenanceTasks() {
  const pricingPlans = [
    {
      title: "Maintenance web & mobile sur mesure",
      price: 99,
      isMonthly: true,

      features: [
        {
          text: "Mises à jour régulières des frameworks et bibliothèques utilisées",
          enabled: true,
        },
        {
          text: "Sauvegardes hebdomadaires automatiques.",
          enabled: true,
        },
        {
          text: "Surveillance basique de la sécurité (détection de vulnérabilités).",
          enabled: true,
        },
        {
          text: "Assistance technique",
          enabled: true,
        },
        {
          text: "Rapports de performance mensuels",
          enabled: true,
        },
        {
          text: "Support email pour les questions techniques",
          enabled: true,
        },
      ] as Feature[],
    },
    {
      title: "Maintenance e-commerce",
      price: 99,
      isMonthly: true,
      features: [
        {
          text: "Mises à jour régulières (CMS, plugins, thèmes).",
          enabled: true,
        },
        {
          text: "Gestion e-commerce complète (ajout/mise à jour de 20 produits/mois).",
          enabled: true,
        },
        {
          text: "Personnalisation de fonctionnalités spécifiques (plugins ou design).",
          enabled: true,
        },
        {
          text: "Optimisation SEO avancée (mots-clés, analyses).",
          enabled: true,
        },
        {
          text: "Rapports de performance mensuels.",
          enabled: true,
        },
      ] as Feature[],
    },
  ];
  return (
    <section className="w-screen relative overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="w-full text-center">
          <h2 className="text-xl sm:text-4xl font-aeonik font-bold bg-title-gradient inline-block text-transparent bg-clip-text">
            Maintenance de votre site web & application
          </h2>
          <h3 className="lg:text-6xl text-2xl font-bold text-center lg:mb-20 mb-10">
            Maintenance
          </h3>
        </div>

        <div className="flex flex-col md:flex-row  mb-20 justify-center items-center gap-8 w-full">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              buttonHref="https://tidycal.com/boughanmieddy8/audit-de-votre-projet"
              className="h-[43rem]"
            />
          ))}
        </div>
      </div>
      <Image
        src={"/img/blur-blue.png"}
        alt="web redesign"
        width={1920}
        height={1080}
        className="absolute md:h-auto mt-96 md:mt-0 h-[55rem] w-[35rem] right-0 top-96 -z-10 object-cover"
      />
      <SectionDigitalBoost />
    </section>
  );
}

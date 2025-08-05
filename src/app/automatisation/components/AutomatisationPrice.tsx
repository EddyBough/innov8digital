"use client";
import React from "react";
import PricingCard, {
  Feature,
  PricingCardProps,
} from "@/components/ui/PricingCard";
import Image from "next/image";
import Carousel from "@/components/features/Carousel";

export default function AutomatisationPrice() {
  const pricingPlans: PricingCardProps[] = [
    {
      title: "Starter IA",
      subtitle: "Parfait pour débuter avec l'automatisation",
      price: "Sur devis",
      badge: "populaire" as const,
      features: [
        { text: "Audit des processus ciblé", enabled: true },
        { text: "Chatbot intelligent simple", enabled: true },
        { text: "Automatisation 1-2 tâches", enabled: true },
        { text: "Formation équipe de base", enabled: true },
        { text: "Support 3 mois inclus", enabled: true },
      ] as Feature[],
    },
    {
      title: "Business IA",
      subtitle: "Solution complète pour PME/ETI",
      price: "Sur devis",
      badge: "recommandé" as const,
      features: [
        { text: "Audit complet des processus", enabled: true },
        { text: "Système RAG personnalisé", enabled: true },
        { text: "Assistant MCP multi-tâches", enabled: true },
        { text: "Intégration avec vos outils", enabled: true },
        { text: "Chatbot avancé multicanal", enabled: true },
        { text: "Formation approfondie", enabled: true },
        { text: "Support 6 mois inclus", enabled: true },
      ] as Feature[],
    },
    {
      title: "Enterprise IA",
      subtitle: "Transformation complète pour grandes structures",
      price: "Sur devis",
      features: [
        { text: "Audit stratégique global", enabled: true },
        { text: "Écosystème IA sur mesure", enabled: true },
        { text: "RAG multi-sources avancé", enabled: true },
        { text: "Système MCP complexe", enabled: true },
        { text: "IA prédictive & analytics", enabled: true },
        { text: "Sécurité renforcée", enabled: true },
        { text: "Formation certifiante", enabled: true },
        { text: "Support 12 mois inclus", enabled: true },
      ] as Feature[],
    },
    {
      title: "Sur mesure",
      subtitle: "Solution unique pour besoins spécifiques",
      price: "Sur devis",
      features: [
        { text: "Analyse personnalisée complète", enabled: true },
        { text: "Architecture IA propriétaire", enabled: true },
        { text: "Intégrations complexes", enabled: true },
        { text: "IA générative personnalisée", enabled: true },
        { text: "Conformité secteur spécifique", enabled: true },
        { text: "Équipe dédiée", enabled: true },
        { text: "Support illimité", enabled: true },
        { text: "Évolution continue", enabled: true },
      ] as Feature[],
    },
  ];

  return (
    <section>
      <Image
        src={"/img/blur-bluePurple.png"}
        alt=""
        width={400}
        height={1200}
        priority
        className="absolute md:h-auto md:mt-0 h-[55rem] w-[35rem] right-0 bottom-0 -z-10 object-cover"
        quality={100}
      />

      {/* Pricing section header */}
      <div className="text-center mt-12 md:mt-20">
        <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
          Solutions d&apos;automatisation sur mesure
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

      {/* Portfolio section */}
      <div className="text-center mt-32 md:mt-60">
        <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
          Nos cas d&apos;usage
        </h2>
        <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
          L&apos;IA au service de votre croissance
        </h3>
        <div className="w-full overflow-hidden">
          <Carousel />
        </div>
      </div>
    </section>
  );
}

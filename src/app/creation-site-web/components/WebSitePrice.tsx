"use client";
import React from "react";
import PricingCard, {
  Feature,
  PricingCardProps,
} from "@/components/ui/PricingCard";
import Image from "next/image";
import Carousel from "@/components/features/Carousel";

export default function WebSitePrice() {
  const pricingPlans: PricingCardProps[] = [
    {
      title: "Essentielle",
      subtitle: "Idéal pour les sites vitrines & petites entreprises/Portfolio",
      price: "Sur devis",
      badge: "populaire" as const,
      features: [
        { text: "Audit initial: Analyse des besoins", enabled: true },
        { text: "Maquettage sur mesure", enabled: true },
        { text: "Design responsive", enabled: true },
        { text: "Contenu statique", enabled: true },
        { text: "Optimisation SEO de base", enabled: true },
      ] as Feature[],
    },
    {
      title: "Standard",
      subtitle: "Conçu pour les entreprise à croissance rapide",
      price: "Sur devis",
      badge: "recommandé" as const,
      features: [
        { text: "Audit approfondi", enabled: true },
        {
          text: "Fonctionnalité de l’offre essentielle",
          enabled: true,
        },
        {
          text: "Contenu dynamique",
          enabled: true,
        },
        {
          text: "Système d’authentification",
          enabled: true,
        },
        {
          text: "SEO étude des mots-clés",
          enabled: true,
        },
        {
          text: "Intégration de système de paiement",
          enabled: true,
        },
      ] as Feature[],
    },
    {
      title: "Avancée",
      subtitle: "Parfait pour les grandes entreprise ou boutique e-commerce",
      price: "Sur devis",
      features: [
        { text: "Audit stratégique complet", enabled: true },
        {
          text: "Fonctionnalité de l’offre standard",
          enabled: true,
        },
        {
          text: "Boutique e-commerce",
          enabled: true,
        },
        {
          text: "Gestion multi-langues",
          enabled: true,
        },
        {
          text: "Intégration IA ou Chatbot",
          enabled: true,
        },
        {
          text: "Analyse concurrentielle approfondie",
          enabled: true,
        },
        {
          text: "Inclus l'offre transformation de projet et création MVP",
          enabled: true,
        },
      ] as Feature[],
    },
    {
      title: "Personnalisée",
      subtitle: "Parfait pour les grandes entreprise ou boutique e-commerce",
      price: "Sur devis",
      features: [
        { text: "Devis à la demande", enabled: true },
        { text: "Analyse personnalisée", enabled: true },
        { text: "Intégration IA", enabled: true },
        {
          text: "Fonctionnalités spécifiques",
          enabled: true,
        },
        { text: "Intégration complexe", enabled: true },
        { text: "Suivi et support dédiés", enabled: true },
        { text: "Conseil sur le modèle économique", enabled: true },
        {
          text: "Coaching stratégique",
          enabled: true,
        },
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
        className="absolute md:h-auto md:mt-0 h-[55rem] w-full md:w-[35rem] right-0 bottom-0 -z-10 object-cover"
        quality={100}
      />

      {/* Pricing section header */}
      <div className="text-center mt-12 md:mt-20">
        <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
          Développement de site web sur mesure
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
          Nos réalisations
        </h2>
        <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
          A la pointe de l&apos;innovation digitale
        </h3>
        <div className="w-full overflow-hidden">
          <Carousel />
        </div>
      </div>
    </section>
  );
}

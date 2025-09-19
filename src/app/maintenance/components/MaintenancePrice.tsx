import React from "react";
import Image from "next/image";
import PricingCard, { Feature } from "@/components/ui/PricingCard";

export default function MaintenancePrice() {
  const pricingPlans = [
    {
      title: "Maintenance complète Web & Mobile",
      subtitle: "Idéal pour s'assurer une tranquillité au quotidien",
      price: "Sur devis",
      isMonthly: false,
      features: [
        {
          text: "Mises à jour régulières des frameworks et bibliothèques utilisées",
          enabled: true,
        },
        { text: "Sauvegardes hebdomadaires automatiques.", enabled: true },
        {
          text: "Surveillance basique de la sécurité (détection de vulnérabilités).",
          enabled: true,
        },
        {
          text: "Assistance technique",
          enabled: true,
        },
        {
          text: "Rapports de performance mensuels.",
          enabled: true,
        },
        {
          text: "Support email pour les questions techniques.",
          enabled: true,
        },
      ] as Feature[],
    },
    {
      title: "Maintenance complète CMS & E-commerce",
      subtitle:
        "Idéal pour le maintien de votre site e-commerce WordPress ou Shopify",
      price: "Sur devis",
      isMonthly: false,
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
    <section>
      <Image
        src={"/img/blur-pink.webp"}
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
          Maintenance de votre site web & application
        </h2>
        <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
          Votre tranquillité à petit prix
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

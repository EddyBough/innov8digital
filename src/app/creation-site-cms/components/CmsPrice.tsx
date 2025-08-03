"use client";
import React from "react";
import PricingCard, { Feature } from "@/components/ui/PricingCard";
import Image from "next/image";
import Carousel from "@/components/features/Carousel";

export default function CmsPrice() {
  const cmsPrice = [
    {
      title: "Essentielle",
      subtitle: "Idéal pour les sites vitrines & petites entreprises",
      price: "Sur devis",
      badge: "populaire" as const,
      features: [
        { text: "Audit approfondi", enabled: true },
        { text: "Installation CMS (Wordpress, Shopify)", enabled: true },
        { text: "Design basé sur un thème existant", enabled: true },
        { text: "Système d’authentification ", enabled: true },
        { text: "Intégration de système de paiement", enabled: true },
      ] as Feature[],
    },
    {
      title: "Standard",
      subtitle: "Conçu pour les entreprise à croissance rapide",
      price: "Sur devis",
      badge: "recommandé" as const,
      features: [
        { text: "Fonctionnalité de l’offre Essentielle.", enabled: true },
        {
          text: "Design amélioré avec personnalisation avancée du thème",
          enabled: true,
        },
        {
          text: "Intégration de plugins/extensions (SEO, sécurité, e-commerce basique)",
          enabled: true,
        },
        {
          text: "Mise en place d’un blog ou catalogue produit (jusqu’à 20 articles/produits)",
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
        { text: "Fonctionnalité de l’offre Standard", enabled: true },
        {
          text: "Configuration complète Shopify ou WooCommerce",
          enabled: true,
        },
        { text: "Gestion de 100 produits et plus", enabled: true },
        { text: "Intégration blog & Newsletter", enabled: true },
        {
          text: "Optimisation SEO E-commerce(fiche produit, structure)",
          enabled: true,
        },
        {
          text: "Formation détailée",
          enabled: true,
        },
      ] as Feature[],
    },
    {
      title: "Personnalisée",
      subtitle: "Parfait pour les grandes entreprise ou boutique e-commerce",

      price: "Sur devis",
      features: [
        { text: "Analyse personnalisée", enabled: true },
        {
          text: "Fonctionnalités spécifiques",
          enabled: true,
        },
        { text: "Intégration complexe", enabled: true },
        { text: "Suivi et support dédiés", enabled: true },
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
          Développement de site CMS
        </h2>
      </div>
      {/* Pricing cards container */}
      <div className="mt-16 lg:mt-28 mb-24 lg:mb-36 flex flex-col lg:flex-row justify-center items-stretch gap-6 lg:gap-8">
        {cmsPrice.map((plan, index) => (
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
        <h3 className="text-2xl lg:text-6xl font-bold text-center mb-6 md:mb-10 lg:mb-20">
          A la pointe de l&apos;innovation digitale
        </h3>
        <div className="w-full overflow-hidden">
          <Carousel />
        </div>
      </div>
    </section>
  );
}

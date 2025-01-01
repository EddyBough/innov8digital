"use client";
import React from "react";
import Image from "next/image";
import PricingCard, { type Feature } from "@/components/ui/PricingCard";

export default function SectionOffersWebSite() {
  const pricingPlans = [
    {
      title: "Essentielle",
      subtitle:
        "Parfait pour les petites entreprises ou artisans souhaitant une présence en ligne rapide et efficace.",
      price: 1990,

      features: [
        { text: "Audit approfondi", enabled: true },
        { text: "Installation CMS (Wordpress, Shopify)", enabled: true },
        { text: "Design basé sur un thème existant", enabled: true },
        { text: "Système d'authentification ", enabled: true },
        { text: "Intégration de système de paiement", enabled: true },
      ] as Feature[],
    },
    {
      title: "Standard",
      subtitle:
        "Une offre complète pour les entreprises en quête d'un site professionnel et fonctionnel.",
      price: 2490,

      features: [
        { text: "Fonctionnalité de l'offre Essentielle.", enabled: true },
        {
          text: "Design amélioré avec personnalisation avancée du thème",
          enabled: true,
        },
        {
          text: "Intégration de plugins/extensions (SEO, sécurité, e-commerce basique)",
          enabled: true,
        },
        {
          text: "Mise en place d'un blog ou catalogue produit (jusqu'à 20 articles/produits)",
          enabled: true,
        },
        {
          text: "Mise en place d'un blog ou catalogue produit (jusqu'à 20 articles/produits)",
          enabled: true,
        },
      ] as Feature[],
    },
    {
      title: "Avancée",
      subtitle: "Parfait pour les grandes entreprise ou boutique e-commerce",
      price: 4990,

      features: [
        { text: "Fonctionnalité de l'offre Standard", enabled: true },
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
      title: "Personalisée",
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
    <section className="w-screen relative overflow-hidden mt-24">
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
        <div className="w-full text-center">
          <h2 className="text-xl sm:text-4xl font-aeonik font-bold bg-title-gradient inline-block text-transparent bg-clip-text">
            Nos services et tarifs
          </h2>
          <h3 className="lg:text-6xl text-2xl font-bold text-center lg:mb-20 mb-10">
            Découvrez l&apos;offre qui correspond à vos objectifs
          </h3>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-4xl font-aeonik font-bold bg-title-gradient inline-block text-transparent bg-clip-text">
            Développement de site web
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              onButtonClick={() => console.log(`Clicked on ${plan.title} plan`)}
              className="h-[670px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

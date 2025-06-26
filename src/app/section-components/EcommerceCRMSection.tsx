"use client";
import React from "react";
import PricingCard, { type Feature } from "@/components/ui/PricingCard";

export default function EcommerceCRMSection() {
  const pricingPlans = [
    {
      title: "Essentielle",
      subtitle:
        "Parfait pour les petites entreprises ou artisans souhaitant une présence en ligne rapide et efficace.",
      price: 1000,

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
      price: 1500,

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
        {
          text: "Intégration de système de paiement",
          enabled: true,
        },
      ] as Feature[],
    },
    {
      title: "Avancée",
      subtitle: "Parfait pour les grandes entreprise ou boutique e-commerce",
      price: 3500,

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
    <section>
      <div className="text-center my-36">
        <h2 className="text-xl sm:text-4xl font-bold bg-title-gradient inline-block text-transparent bg-clip-text">
          Développement de site web
        </h2>
      </div>
      <div className="flex mb-36 flex-col md:flex-row justify-center items-center gap-8 w-full">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            {...plan}
            buttonHref="https://tidycal.com/boughanmieddy8/audit-de-votre-projet"
            className="h-[46rem]"
          />
        ))}
      </div>
    </section>
  );
}

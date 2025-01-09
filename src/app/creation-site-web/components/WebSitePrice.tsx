"use client";
import React from "react";
import PricingCard, { Feature } from "@/components/ui/PricingCard";
import Image from "next/image";
import Carousel from "@/components/features/Carousel";

export default function WebSitePrice() {
  const pricingPlans = [
    {
      title: "Essentielle",
      subtitle: "Idéal pour les sites vitrines & petites entreprises/Portfolio",
      price: 1990,
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
      price: 2490,
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
          text: "Intégration de système de paiement",
          enabled: true,
        },
      ] as Feature[],
    },
    {
      title: "Avancée",
      subtitle: "Parfait pour les grandes entreprise ou boutique e-commerce",
      price: 4990,
      features: [
        { text: "Audit stratégique complet", enabled: true },
        {
          text: "Fonctionnalité de l’offre standard",
          enabled: true,
        },
        { text: "Boutique e-commerce", enabled: true },
        { text: "Intégration CRM & Newsletter", enabled: true },
        {
          text: "Maintenance quotidienne ",
          enabled: true,
        },
        {
          text: "Maquettage sur mesure",
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
        <h2 className="text-xl sm:text-4xl font-bold bg-title-gradient inline-block text-transparent bg-clip-text">
          Développement de site web
        </h2>
      </div>

      {/* Pricing cards container */}
      <div className="mt-16 md:mt-28 mb-24 md:mb-36 flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8 ">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="w-full md:w-auto flex-shrink-0 md:flex-shrink"
          >
            <PricingCard
              {...plan}
              onButtonClick={() => console.log(`Clicked on ${plan.title} plan`)}
              className=" h-[36rem] mb-8  max-w-sm mx-auto"
            />
          </div>
        ))}
      </div>

      {/* Portfolio section */}
      <div className="text-center mt-32 md:mt-60">
        <h2 className="text-xl sm:text-4xl font-bold bg-title-gradient inline-block text-transparent bg-clip-text">
          Nos réalisations
        </h2>
        <h3 className="text-2xl lg:text-6xl my-3 md:my-5 font-bold text-center mb-6 md:mb-10 lg:mb-20">
          A la pointe de l&apos;innovation digitale
        </h3>
        <div className="w-full overflow-hidden">
          <Carousel />
        </div>
      </div>
    </section>
  );
}

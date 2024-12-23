// SecondSection.tsx
"use client";
import React from "react";
import { HoverEffect } from "@/src/components/ui/card-hover-effect";
import Image from "next/image";
import BlurOrangeEffect from "@/public/img/blur-orange.png";

export const services = [
  {
    title: "Création de site web & Applications sur mesures",
    description:
      "Concevez des plateformes web et mobiles entièrement personnalisées, adaptées aux besoins spécifiques de votre entreprise.",
    image: "/img/website.png",
    link: "#",
  },
  {
    title: "Création de site E-Commerce CMS et CRM",
    description:
      "Développement de sites vitrines et e-commerce basés sur des solutions populaires comme WordPress, Shopify ou des CRM adaptés à vos besoins.",
    image: "/img/e-commerce.png",
    link: "#",
  },
  {
    title: "Création d'applications mobiles sur mesures Apple/Android",
    description:
      "Créez des interfaces intuitives et modernes, offrant une expérience utilisateur optimale pour fidéliser vos clients.",
    image: "/img/mobile.png",
    link: "#",
  },
  {
    title: "Référencement SEO et visibilité",
    description:
      "Optimisez votre site pour apparaitre en tête des moteurs de recherche et augmentez votre trafic grâce à une stratégie SEO performante.",
    image: "/img/seo.png",
    link: "#",
  },
  {
    title: "Maintenance & support technique",
    description:
      "Gardez vos plateformes performantes et sécurisées avec des mises à jour régulières et un support technique réactif.",
    image: "/img/maintenance.png",
    link: "#",
  },
  {
    title: "Stratégie digitale & marketing",
    description:
      "Boostez votre activité avec des campagnes publicitaires, la gestion des réseaux sociaux et des stratégies marketing ciblées.",
    image: "/img/marketing.png",
    link: "#",
  },
];

export default function SecondSection() {
  return (
    <section className="w-screen relative overflow-hidden">
      <Image
        src={BlurOrangeEffect}
        alt=""
        width={400}
        height={1200}
        priority
        className="absolute left-0 top-0 -z-10 h-full object-cover"
        quality={100}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 bg-title-gradient inline-block text-transparent bg-clip-text">
            Nos services
          </h2>
        </div>
        <HoverEffect items={services} />
      </div>
    </section>
  );
}

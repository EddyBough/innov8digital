"use client";
import React from "react";
import Image from "next/image";
import MaintenanceFeatureCard from "@/components/ui/MaintenanceFeatureCard";
import {
  ClipboardList,
  Settings2,
  Palette,
  ShoppingCart,
  Search,
  Headset,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CmsPrice from "./CmsPrice";

export default function SectionMethodologyCms() {
  const methodologyCardsCms = [
    {
      icon: <ClipboardList size={48} />,
      title: "Découverte et stratégie",
      description:
        "Analyse de vos besoins et élaboration d'un cahier des charges précis.Exemple : Quels sont vos objectifs principaux ? Conversion, engagement, branding ? Nous créons la solution qui y répond.",
    },
    {
      icon: <Settings2 size={48} />,
      title: "Installation et configuration du CMS",
      description:
        "Nous installons et configurons des solutions comme WordPress, Shopify, ou d’autres plateformes adaptées à votre projet.",
    },
    {
      icon: <Palette size={48} />,
      title: "Personnalisation du design",
      description:
        "Grâce à des thèmes modernes et professionnels, nous créons un site qui reflète votre image de marque.",
    },
    {
      icon: <ShoppingCart size={48} />,
      title: "Intégration de fonctionnalités",
      description:
        "Installation des boutiques en ligne avec Shopify ou WooCommerce. Gestion de contenu (blogs, actualités). Formulaires interactifs et galeries.",
    },
    {
      icon: <Search size={48} />,
      title: "Optimisation SEO",
      description:
        "Nos sites sont conçus pour être visibles sur les moteurs de recherche grâce à des pratiques SEO adaptées.",
    },
    {
      icon: <Headset size={48} />,
      title: "Formation et support",
      description:
        "Une fois votre site livré, nous vous formons à son utilisation et restons disponibles pour toute question.",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <Image
        src={"/img/blur-orange.png"}
        alt=""
        width={400}
        height={1200}
        priority
        className="absolute md:h-auto mt-96 md:mt-0 h-[55rem] w-full md:w-[35rem] left-0 top-0 -z-10 object-cover"
        quality={100}
      />
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="w-full text-center mt-10 md:mt-20">
          <h2 className="text-xl sm:text-4xl bg-title-gradient inline-block text-transparent bg-clip-text">
            Votre projet sur mesure
          </h2>
          <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
            Notre méthodologie
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
          {methodologyCardsCms.map((card, index) => (
            <MaintenanceFeatureCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <div className="w-full text-center mt-32 md:mt-60">
          <h2 className="text-xl sm:text-4xl  bg-title-gradient inline-block text-transparent bg-clip-text">
            Assurez la perrenité de votre site
          </h2>
          <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
            Maîtrisez votre avenir
          </h3>
        </div>

        <div className="flex justify-center m-auto my-20 md:my-40">
          <div className="w-full md:w-[820px] h-auto md:h-[350px] shadow-xl rounded-[20px] md:rounded-[36px] bg-white/50 p-6 md:p-12 flex flex-col items-center justify-between">
            <h2 className="text-2xl md:text-4xl font-bold text-center">
              Maintenance de votre site E-commerce
            </h2>

            <p className="text-center text-base md:text-lg max-w-2xl my-6 md:my-0">
              Concentrez vous sur votre business, on s&apos;occupe du reste.
              Confiez vous la maintenance de votre site web e-commerce. Cliquez
              sur le bouton ci-dessous pour découvrir notre offre maintenance
              dédiée.
            </p>

            <Link href="/maintenance">
              <Button className="bg-black rounded-lg text-white px-4 md:px-8 py-6 md:py-6 lg:py-7 text-sm md:text-lg hover:bg-black/90 transition-colors shadow-lg max-w-full w-auto overflow-hidden break-words md:whitespace-nowrap text-center">
                Découvrir notre service maintenance
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <CmsPrice />
        </div>
      </div>
    </section>
  );
}

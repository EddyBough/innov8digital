import React from "react";
import Image from "next/image";
import { LineChart, Rocket, Target } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PrestationCard from "@/components/ui/PrestationCard";
import SeoPrice from "./SeoPrice";
import MaintenanceFeatureCard from "@/components/ui/MaintenanceFeatureCard";

export default function SectionMethodologySeo() {
  const methodologyCardsSeo = [
    {
      icon: <Target size={48} />,
      title: "Diagnostic et objectifs",
      description:
        "Nous analysons votre présence en ligne actuelle et définissons vos priorités pour développer une stratégie efficace.",
    },
    {
      icon: <Rocket size={48} />,
      title: "Mise en œuvre",
      description:
        "Mise en place des actions SEO et campagnes marketing adaptées à votre public cible.",
    },
    {
      icon: <LineChart size={48} />,
      title: "Suivi et optimisation",
      description:
        "Analyse des performances et ajustements réguliers pour garantir des résultats concrets et mesurables.",
    },
  ];

  const Prestation = [
    {
      title: "SEO (Search Engine Optimization) ",
      description:
        "Analyse complète de votre site (audit SEO).Optimisation des mots-clés, titres, et métadonnées. Amélioration de la vitesse et de l’expérience utilisateur. Création de contenus optimisés pour les moteurs de recherche. Stratégies de backlinks pour renforcer votre autorité en ligne.",
    },
    {
      title: "SEA (Search Engine Advertising) ",
      description:
        "Gestion de campagnes publicitaires sur Google Ads. Analyse des mots-clés et création d’annonces percutantes.Suivi et optimisation continue des performances.",
    },
    {
      title: "Marketing de contenu",
      description:
        "Rédaction d’articles de blog et contenu engageant. Création de newsletters et campagnes email. Stratégies de storytelling pour captiver votre audience.",
    },
    {
      title: "Réseaux sociaux",
      description:
        "Création et animation de vos comptes professionnels (Facebook, Instagram, LinkedIn, etc.). Gestion de campagnes publicitaires ciblées. Analyse des performances et ajustements stratégiques.",
    },
    {
      title: "Stratégie globale",
      description:
        "Élaboration d’un plan digital personnalisé aligné sur vos objectifs. Suivi des KPIs (indicateurs de performance). Conseils pour optimiser votre présence en ligne et convertir vos visiteurs en clients.",
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
          <h2 className="text-xl sm:text-4xl font-aeonik font-bold bg-title-gradient inline-block text-transparent bg-clip-text">
            Stratégie Digitale, SEO & Marketing
          </h2>
          <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
            Prêt à propulser votre visibilité en ligne ?
          </h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 mb-6 lg:mb-12">
            {methodologyCardsSeo.slice(0, 3).map((card, index) => (
              <MaintenanceFeatureCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
          <Link
            href="https://tidycal.com/boughanmieddy8/audit-de-votre-projet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-black rounded-lg text-white px-4 md:px-8 py-3 md:py-6 text-sm md:text-lg hover:bg-black/90 transition-colors shadow-lg max-w-full w-auto overflow-hidden break-words md:whitespace-nowrap text-center">
              Demandez un audit SEO gratuit
            </Button>
          </Link>
        </div>

        <div className="w-full text-center mt-32 md:mt-60">
          <h2 className="text-xl sm:text-4xl font-bold bg-title-gradient inline-block text-transparent bg-clip-text">
            Nos services en SEO & Marketing
          </h2>
          <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
            Nos prestations
          </h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 mb-6 lg:mb-12">
            {Prestation.slice(0, 3).map((card, index) => (
              <PrestationCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
          <div className="w-full mb-14 lg:w-2/3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {Prestation.slice(3).map((card, index) => (
              <PrestationCard
                key={index + 3}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
          <Link
            href="https://tidycal.com/boughanmieddy8/audit-de-votre-projet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-black rounded-lg text-white px-4 md:px-8 py-3 md:py-6 text-sm md:text-lg hover:bg-black/90 transition-colors shadow-lg max-w-full w-auto overflow-hidden break-words md:whitespace-nowrap text-center">
              Demandez un audit SEO gratuit
            </Button>
          </Link>
        </div>

        <div>
          <SeoPrice />
        </div>
      </div>
    </section>
  );
}

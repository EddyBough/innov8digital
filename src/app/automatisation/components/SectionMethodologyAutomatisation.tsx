import React from "react";
import Image from "next/image";
import MaintenanceFeatureCard from "@/components/ui/MaintenanceFeatureCard";
import { Brain, Database, MessageSquare, Zap, BarChart3 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AutomatisationPrice from "./AutomatisationPrice";

export default function SectionMethodologyAutomatisation() {
  const methodologyCards = [
    {
      icon: <BarChart3 size={48} />,
      title: "Audit des processus",
      description:
        "Analyse complète de vos flux de travail actuels pour identifier les opportunités d'automatisation les plus impactantes.",
    },
    {
      icon: <Brain size={48} />,
      title: "Conception IA",
      description:
        "Développement de solutions intelligentes adaptées : systèmes RAG, assistants MCP, et agents conversationnels.",
    },
    {
      icon: <Database size={48} />,
      title: "Intégration données",
      description:
        "Connexion sécurisée avec vos systèmes existants et optimisation de vos bases de données pour l'IA.",
    },
    {
      icon: <MessageSquare size={48} />,
      title: "Tests & formation",
      description:
        "Validation des performances, formation de vos équipes et documentation complète des nouveaux processus.",
    },
    {
      icon: <Zap size={48} />,
      title: "Optimisation continue",
      description:
        "Monitoring des performances, ajustements et améliorations pour maximiser l'efficacité de vos automatisations.",
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
        className="absolute md:h-auto mt-96 md:mt-0 h-[55rem] w-[35rem] left-0 top-0 -z-10 object-cover"
        quality={100}
      />
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="w-full text-center mt-10 md:mt-20">
          <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
            Votre transformation digitale
          </h2>
          <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
            Notre approche en 5 étapes
          </h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 mb-6 lg:mb-12">
            {methodologyCards.slice(0, 3).map((card, index) => (
              <MaintenanceFeatureCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {methodologyCards.slice(3).map((card, index) => (
              <MaintenanceFeatureCard
                key={index + 3}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>

        <div className="w-full text-center mt-32 md:mt-60">
          <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
            Maximisez votre ROI
          </h2>
          <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
            Des résultats mesurables
          </h3>
        </div>

        <div className="flex justify-center m-auto my-20 md:my-40">
          <div className="w-full md:w-[820px] h-auto md:h-[350px] shadow-xl rounded-[20px] md:rounded-[36px] bg-white/50 p-6 md:p-12 flex flex-col items-center justify-between">
            <h2 className="text-2xl md:text-4xl font-bold text-center">
              Support & évolution continue
            </h2>

            <p className="text-center text-base md:text-lg max-w-2xl my-6 md:my-0">
              L&apos;automatisation évolue avec vos besoins. Notre service de
              support garantit la performance optimale de vos systèmes IA et
              leur adaptation aux nouvelles exigences de votre entreprise.
            </p>

            <Link
              href="https://tidycal.com/boughanmieddy8/audit-de-votre-projet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-black rounded-lg text-white px-4 md:px-8 py-3 md:py-6 text-sm md:text-lg hover:bg-black/90 transition-colors shadow-lg max-w-full w-auto overflow-hidden break-words md:whitespace-nowrap text-center">
                Découvrir notre accompagnement IA
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <AutomatisationPrice />
        </div>
      </div>
    </section>
  );
}

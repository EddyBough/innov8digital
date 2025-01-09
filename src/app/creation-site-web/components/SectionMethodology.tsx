import React from "react";
import Image from "next/image";
import MaintenanceFeatureCard from "@/components/ui/MaintenanceFeatureCard";
import { Layout, Paintbrush, Code, TestTube, Settings } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import WebSitePrice from "./WebSitePrice";

export default function SectionMethodology() {
  const methodologyCards = [
    {
      icon: <Layout size={48} />,
      title: "Analyse des besoins",
      description:
        "Ensemble, nous définirons vos objectifs et besoins spécifiques pour créer un projet sur mesure.",
    },
    {
      icon: <Paintbrush size={48} />,
      title: "Design UX/UI",
      description:
        "Création d'une maquette détaillée sur Figma, avec une attention particulière à l'esthétique et à l'ergonomie, que nous validerons ensemble.",
    },
    {
      icon: <Code size={48} />,
      title: "Développement et intégration",
      description:
        "Développement de votre site avec les technologies les plus adaptées à votre projet.",
    },
    {
      icon: <TestTube size={48} />,
      title: "Tests et déploiement",
      description:
        "Validation des performances, compatibilité sur tous les appareils, et mise en ligne sécurisée.",
    },
    {
      icon: <Settings size={48} />,
      title: "Maintenance et optimisation",
      description:
        "Nous restons disponibles pour des mises à jour, des améliorations ou toute demande post-lancement.",
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
            Votre projet sur mesure
          </h2>
          <h3 className="text-3xl lg:text-6xl my-3 md:my-5 font-bold text-center mb-8 lg:mb-20">
            Notre méthodologie
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-12 md:grid-cols-12">
          {methodologyCards.map((card, index) => (
            <MaintenanceFeatureCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              className={`${
                index < 3
                  ? "md:col-span-4"
                  : index === 3
                  ? "md:col-start-3 md:col-span-4"
                  : "md:col-span-4"
              } `}
            />
          ))}
        </div>

        <div className="w-full text-center mt-32 md:mt-60">
          <h2 className="text-xl sm:text-4xl font-bold bg-title-gradient inline-block text-transparent bg-clip-text">
            Assurez la perrenité de votre site
          </h2>
          <h3 className="text-3xl lg:text-6xl my-3 md:my-5 font-bold text-center mb-8 lg:mb-20">
            Maîtrisez votre avenir
          </h3>
        </div>

        <div className="flex justify-center m-auto my-20 md:my-40">
          <div className="w-full md:w-[820px] h-auto md:h-[350px] shadow-xl rounded-[20px] md:rounded-[36px] bg-white/50 p-6 md:p-12 flex flex-col items-center justify-between">
            <h2 className="text-2xl md:text-4xl font-bold text-center">
              Maintenance de votre site
            </h2>

            <p className="text-center text-base md:text-lg max-w-2xl my-6 md:my-0">
              La création de votre site web n&apos;est que le début. Notre
              service de maintenance garantit que votre site reste sécurisé,
              performant et à jour. Confiez-nous la maintenance de votre site
              pour une tranquillité d&apos;esprit total.
            </p>

            <Link
              href="https://tidycal.com/boughanmieddy8/audit-de-votre-projet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-black rounded-lg text-white px-4 md:px-8 py-3 md:py-6 text-sm md:text-lg hover:bg-black/90 transition-colors shadow-lg max-w-full w-auto overflow-hidden break-words md:whitespace-nowrap text-center">
                Découvrir notre service maintenance
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <WebSitePrice />
        </div>
      </div>
    </section>
  );
}

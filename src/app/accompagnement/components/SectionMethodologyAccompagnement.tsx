"use client";
import Image from "next/image";
import MaintenanceFeatureCard from "@/components/ui/MaintenanceFeatureCard";
import { Book, Computer, Eye } from "lucide-react";
import SectionValueAccompagnement from "./SectionValueAccompagnement";
import AccompagnementPrice from "./AccompagnementPrice";

export default function SectionMethodologyAccompagnement() {
  const methodologyCardsCms = [
    {
      icon: <Book size={48} />,
      title: "Analyse de vos besoins",
      description:
        "Nous analysons pour vous les opportunités et nous vous aidons à positionner votre projet sur le marché.",
    },
    {
      icon: <Computer size={48} />,
      title: "Développement personnalisé",
      description:
        "Création d'un prototype fonctionnel et sur mesure pour tester votre idée et valider le concept.",
    },
    {
      icon: <Eye size={48} />,
      title: "Stratégie de déploiement",
      description:
        "Accéder à des outils et techniques pour séduire vos premiers clients ou investisseurs.",
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
          <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
            Un accompagnement global
          </h2>
          <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
            Pour transformer vos idées en projets concrets
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 justify-items-center">
          {methodologyCardsCms.map((card, index) => (
            <MaintenanceFeatureCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <SectionValueAccompagnement />

        <div>
          <AccompagnementPrice />
        </div>
      </div>
    </section>
  );
}

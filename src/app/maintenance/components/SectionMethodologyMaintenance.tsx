import React from "react";
import Image from "next/image";
import { Zap, Shield, BicepsFlexed } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PrestationCard from "@/components/ui/PrestationCard";
import MaintenanceFeatureCard from "@/components/ui/MaintenanceFeatureCard";
import MaintenancePrice from "./MaintenancePrice";

export default function SectionMethodologyMaintenance() {
  const maintenanceCards = [
    {
      icon: <Shield size={48} />,
      title: "Sécurité renforcée",
      description:
        "Les cyberattaques sont en constante augmentation. Nous veillons à ce que votre site reste sécurisé grâce à des mises à jour régulières et des outils de protection avancés.",
    },
    {
      icon: <Zap size={48} />,
      title: "Performance garantie",
      description:
        "Un site rapide et fiable améliore l’expérience utilisateur et favorise le référencement naturel (SEO).",
    },
    {
      icon: <BicepsFlexed size={48} />,
      title: "Fiabilité au quotidien",
      description:
        "Avec une surveillance proactive et un support réactif, nous réglons les problèmes avant même qu’ils n’affectent vos visiteurs.",
    },
  ];

  const Maintenance = [
    {
      title: "Mises à jour régulières",
      description:
        "Nous assurons la mise à jour de votre CMS, plugins, thèmes, ou frameworks pour garantir leur compatibilité et leur sécurité.",
    },
    {
      title: "Sauvegardes automatiques",
      description:
        "Sauvegardes quotidiennes ou hebdomadaires pour protéger vos données et permettre une restauration rapide en cas d’incident.",
    },
    {
      title: "Surveillance et sécurité",
      description:
        "Surveillance 24/7 pour détecter et éliminer les menaces (malware, piratages) avant qu’elles ne causent des dégâts.",
    },
    {
      title: "Optimisation des performances",
      description:
        "Analyse et amélioration de la vitesse de chargement, optimisation du code et des images pour une expérience utilisateur fluide.",
    },
    {
      title: "Support technique réactif",
      description:
        "Une équipe à votre écoute pour résoudre les bugs, répondre à vos questions ou intégrer des modifications.",
    },
    {
      title: "Mise à jour de contenu",
      description:
        "Ajout de pages, mise à jour de produits ou modifications mineures pour garder votre site toujours à jour.",
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
      <div className="max-w-7xl mx-auto px-4  md:py-16">
        <div className="w-full text-center mt-20">
          <h2 className="text-xl sm:text-4xl  bg-title-gradient inline-block text-transparent bg-clip-text">
            Maintenance & Support technique
          </h2>
          <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
            Pourquoi la maintenance est indispensable ?
          </h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 mb-6 lg:mb-12">
            {maintenanceCards.slice(0, 3).map((card, index) => (
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
              Demandez un devis gratuit
            </Button>
          </Link>
        </div>

        <div className="w-full text-center mt-32 md:mt-60">
          <h2 className="text-xl sm:text-4xl font-bold bg-title-gradient inline-block text-transparent bg-clip-text">
            Nos services de maintenance et support
          </h2>
          <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
            Nos prestations
          </h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 mb-6 lg:mb-12">
            {Maintenance.slice(0, 6).map((card, index) => (
              <PrestationCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>

        <div>
          <MaintenancePrice />
        </div>
      </div>
    </section>
  );
}

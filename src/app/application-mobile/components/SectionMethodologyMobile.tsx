"use client";
import Image from "next/image";
import MaintenanceFeatureCard from "@/components/ui/MaintenanceFeatureCard";
import {
  Layout,
  Paintbrush,
  Code,
  TestTube,
  Settings,
  SmartphoneCharging,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobilePrice from "./MobilePricing";

export default function SectionMethodologyMobile() {
  const methodologyCardsCms = [
    {
      icon: <Layout size={48} />,
      title: "Découverte et stratégie",
      description:
        "Nous analysons vos besoins et élaborons un cahier des charges détaillé pour définir une stratégie alignée avec vos objectifs : conversion, engagement, ou branding. Chaque solution est conçue sur mesure pour maximiser votre retour sur investissement.",
    },
    {
      icon: <Paintbrush size={48} />,
      title: "Design UI",
      description:
        "Création d'une maquette détaillée sur Figma, avec une attention particulière à l'esthétique et à l'ergonomie, que nous validerons ensemble.",
    },
    {
      icon: <Code size={48} />,
      title: "Développement sur mesure",
      description:
        "Applications natives (iOS et Android). Développement hybride avec des frameworks comme React Native & Node.js ou Symfony pour réduire les coûts et accélérer les délais.",
    },
    {
      icon: <TestTube size={48} />,
      title: "Intégration de fonctionnalités",
      description:
        "Le mobile est un univers à part, nous intégrons des fonctionnalités spécifiques pour une expérience utilisateur optimale.",
    },
    {
      icon: <Settings size={48} />,
      title: "Optimisation SEO",
      description:
        "Nos sites sont conçus pour être visibles sur les moteurs de recherche grâce à des pratiques SEO adaptées.",
    },
    {
      icon: <SmartphoneCharging size={48} />,
      title: "Arrivée sur le Store",
      description:
        "Publication votre application sur Google Play et App Store après validation.",
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
            Votre application mobile sur mesure
          </h2>
          <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
            Comment on s&apos;y prend ?
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

        <div className="w-full text-center mt-32 md:mt-60">
          <h3 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
            Assurez la maintenance de votre application mobile
          </h3>
          <h4 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
            On s&apos;occupe de tout
          </h4>
        </div>

        <div className="flex justify-center m-auto my-20 md:my-40">
          <div className="w-full md:w-[820px] h-auto md:h-[350px] shadow-xl rounded-[20px] md:rounded-[36px] bg-white/50 p-6 md:p-12 flex flex-col items-center justify-between">
            <h3 className="text-2xl md:text-4xl font-bold text-center">
              Maintenance de votre application mobile
            </h3>

            <p className="text-center text-base md:text-lg max-w-2xl my-6 md:my-0">
              Concentrez vous sur votre business, on s&apos;occupe du reste.
              Confiez vous la maintenance de votre application. Cliquez sur le
              bouton ci-dessous pour découvrir notre offre maintenance dédiée.
            </p>

            <Link href="/maintenance" target="_blank" rel="noopener noreferrer">
              <Button className="bg-black rounded-lg text-white px-4 md:px-8 py-6 md:py-6 lg:py-7 text-sm md:text-lg hover:bg-black/90 transition-colors shadow-lg max-w-full w-auto overflow-hidden break-words md:whitespace-nowrap text-center">
                Découvrir notre service maintenance
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <MobilePrice />
        </div>
      </div>
    </section>
  );
}

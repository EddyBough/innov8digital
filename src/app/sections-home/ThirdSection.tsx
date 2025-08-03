import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  numberImage: string;
  centerImage: string;
  description: string;
  index: number;
}

const ServiceCard = ({
  numberImage,
  centerImage,
  description,
  index,
}: ServiceCardProps) => {
  const isEven = index % 2 === 1;

  return (
    <div className="mb-24">
      {/* Desktop layout */}
      <div className="hidden md:flex items-center justify-between gap-8">
        <div className="flex-1">
          {isEven ? (
            <p className="text-black text-lg">{description}</p>
          ) : (
            <Image
              src={numberImage}
              alt="number"
              width={300}
              height={100}
              className="object-contain"
            />
          )}
        </div>

        <div className="w-64 h-64 flex-shrink-0">
          <div className="w-full h-full rounded-full overflow-hidden">
            <Image
              src={centerImage}
              alt="service illustration"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1">
          {isEven ? (
            <Image
              src={numberImage}
              alt="number"
              width={300}
              height={100}
              className="object-contain ml-auto"
            />
          ) : (
            <p className="text-black text-lg">{description}</p>
          )}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="flex flex-col items-center gap-8 md:hidden">
        <Image
          src={numberImage}
          alt="number"
          width={300}
          height={100}
          className="object-contain"
        />

        <div className="w-64 h-64">
          <div className="w-full h-full rounded-full overflow-hidden">
            <Image
              src={centerImage}
              alt="service illustration"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <p className="text-black text-lg text-center px-4">{description}</p>
      </div>
    </div>
  );
};

export default function ThirdSection() {
  const services = [
    {
      numberImage: "/img/01.svg",
      centerImage: "/img/audit.png",
      description:
        "Grâce à notre expertise, nous réalisons un audit approfondi de votre projet pour comprendre vos besoins et vos objectifs. Nous analysons votre secteur d'activité, votre concurrence et votre cible pour vous proposer une solution digitale adaptée à votre entreprise et votre budget.",
    },
    {
      numberImage: "/img/02.svg",
      centerImage: "/img/maquette.png",
      description:
        "Nous créons des solutions sur mesure, adaptés à vos besoins et à votre image de marque. Nous vous proposons des maquettes graphiques pour vous donner un aperçu de votre futur site web. Nous vous accompagnons tout au long du processus de création de votre site web ou application.",
    },
    {
      numberImage: "/img/03.svg",
      centerImage: "/img/ui.png",
      description:
        "Ici, on donne vie à vos rêves. On intègre votre maquette pour une expérience utilisateur qui fait la différence. Nous créons des sites web ergonomiques, intuitifs, créés pour évoluer avec vous et pour offrir une expérience utilisateur optimale.",
    },
    {
      numberImage: "/img/04.svg",
      centerImage: "/img/referencement.png",
      description:
        "Boostez votre visibilité en ligne ! Attirez un trafic qualifié grâce à une stratégie de référencement naturel (SEO) ou payant (SEA) adaptée à votre secteur d'activité. Nous connaissons votre site pour les moteurs de recherche et analysons vos mots-clés pertinent pour maximiser votre impact en ligne.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="w-full text-center mt-20">
        <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
          Vos applications sur mesure
        </h2>
        <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
          Visibilité. Performance. Engagement.
        </h3>
      </div>
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} index={index} />
      ))}
    </div>
  );
}

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
    <div className="mb-24 font-aeonik">
      {/* Desktop layout */}
      <div className="hidden md:flex items-center justify-between gap-8">
        <div className="flex-1">
          {isEven ? (
            <p className="text-gray-600 text-lg">{description}</p>
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
            <p className="text-gray-600 text-lg">{description}</p>
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

        <p className="text-gray-600 text-lg text-center px-4">{description}</p>
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
        "Une audit approfondi de votre site I Une audit seo pour ouvrir les portes à améliorer de votre site et booster vos résultats. Analyse du référencement, expérience utilisateur et stratégie digitale : nous valorisons les leviers d'amélioration pour atteindre vos objectifs et maximiser votre impact.",
    },
    {
      numberImage: "/img/02.svg",
      centerImage: "/img/maquette.png",
      description:
        "Donnez-vie à vos idées grâce au design ! Rendez votre projet avant de réalisation grâce à des maquettes claires, fonctionnelles et optimisées. Chaque détail est pensé pour refléter votre vision et générer une expérience utilisateur optimale.",
    },
    {
      numberImage: "/img/03.svg",
      centerImage: "/img/ui.png",
      description:
        "Une expérience utilisateur qui fait la différence ! Innovation, Rigueur ainsi qu'une recherche permanente de l'excellence et du détail. Nous concevons des interfaces intuitives et engageantes, pensées pour captiver vos utilisateurs. Un design efficace, c'est bien plus que du visuel : c'est fait de connaitre vos utlieurs en clients!",
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
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} index={index} />
      ))}
    </div>
  );
}

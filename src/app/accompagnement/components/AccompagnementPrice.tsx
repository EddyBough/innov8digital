"use client";
import PricingCard, { Feature } from "@/components/ui/PricingCard";
import Image from "next/image";
import Carousel from "@/components/features/Carousel";

export default function AccompagnementPrice() {
  const cmsPrice = [
    {
      title: "Complet",
      subtitle: "Accompagnement de projet - De l’idée à la réalité",
      price: "Sur devis",
      features: [
        { text: "Analyse de marché et étude concurentielle", enabled: true },
        { text: "Création de votre MVP fonctionnel", enabled: true },
        { text: "Stratégie de lancement et prospection", enabled: true },
        { text: "Suivi et support personnalisé", enabled: true },
      ] as Feature[],
    },
  ];
  return (
    <section>
      <Image
        src={"/img/blur-bluePurple.png"}
        alt=""
        width={400}
        height={1200}
        loading="lazy"
        className="absolute md:h-auto md:mt-0 h-[55rem] w-full md:w-[35rem] right-0 bottom-0 -z-10 object-cover"
        quality={75}
      />

      {/* Pricing section header */}
      <div className="text-center mt-12 md:mt-20">
        <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
          Notre accompagnement
        </h2>
      </div>
      {/* Pricing cards container */}
      <div className="mt-16 lg:mt-28 mb-24 lg:mb-36 flex flex-col lg:flex-row justify-center items-stretch gap-6 lg:gap-8">
        {cmsPrice.map((plan, index) => (
          <div
            key={index}
            className="w-full lg:w-auto flex-shrink-0 lg:flex-shrink"
          >
            <PricingCard
              {...plan}
              buttonHref="https://tidycal.com/boughanmieddy8/audit-de-votre-projet"
              className="h-full mb-8 max-w-sm mx-auto"
            />
          </div>
        ))}
      </div>

      {/* Portfolio section */}
      <div className="text-center mt-32 md:mt-60">
        <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
          Nos réalisations
        </h2>
        <h3 className="text-2xl lg:text-6xl  font-bold text-center mb-6 md:mb-10 lg:mb-20">
          A la pointe de l&apos;innovation digitale
        </h3>
        <div className="w-full overflow-hidden">
          <Carousel />
        </div>
      </div>
    </section>
  );
}

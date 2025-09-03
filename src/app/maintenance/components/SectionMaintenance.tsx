import React from "react";
import Image from "next/image";
import FeatureCard from "@/components/ui/FeatureCard";

export default function SectionMaintenance() {
  return (
    <section>
      <Image
        src={"/img/blur-orangeSEO.webp"}
        alt=""
        width={400}
        height={1200}
        priority
        className="absolute md:h-auto mt-96 md:mt-0 h-[55rem] w-[35rem] right-0 top-0 -z-10 object-cover"
        quality={100}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full text-center mt-20">
          <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
            Maintenance & Support technique
          </h2>
          <h1 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
            Soyez rassuré, on s&apos;occupe de tout
          </h1>
        </div>

        <div className="text-center mb-12">
          <FeatureCard
            title="Maintenance & support technique"
            description="Chez Innov8Digital, nous savons qu’un site performant et sécurisé est essentiel pour le succès de votre entreprise. C’est pourquoi nous proposons un service de maintenance et support technique qui assure la pérennité de votre site, tout en vous laissant vous concentrer sur ce qui compte vraiment : votre activité."
            imageSrc="/img/maintenance-man.png"
            imageAlt="Maintenance & support technique"
            buttonHref="https://tidycal.com/boughanmieddy8/audit-de-votre-projet"
          />
        </div>
      </div>
    </section>
  );
}

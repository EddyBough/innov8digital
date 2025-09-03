"use client";
import Image from "next/image";
import FeatureCard from "@/components/ui/FeatureCard";

export default function SectionCreateMobile() {
  return (
    <section>
      <Image
        src={"/img/blur-blue.png"}
        alt=""
        width={400}
        height={1200}
        loading="lazy"
        className="absolute md:h-auto mt-96 md:mt-0 h-[55rem] w-[35rem] right-0 top-0 -z-10 object-cover"
        quality={75}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full text-center mt-20">
          <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
            Création d&apos;applications mobiles
          </h2>
          <h1 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
            Transformez vos idées en expérience mobile unique
          </h1>
        </div>

        <div className="text-center mb-12">
          <FeatureCard
            title="Création d’applications mobiles sur mesures Apple/Android"
            description="Dans un monde où le mobile est devenu incontournable, Innov8 Digital conçoit des applications mobiles sur mesure pour répondre aux besoins spécifiques de votre entreprise. Que ce soit pour iOS, Android ou les deux, nos solutions allient design élégant, performance et fonctionnalités adaptées à votre public cible."
            imageSrc="/img/image-application-mobile.webp"
            imageAlt="Accompagnement sur mesure"
            buttonHref="https://tidycal.com/boughanmieddy8/audit-de-votre-projet"
          />
        </div>
      </div>
    </section>
  );
}

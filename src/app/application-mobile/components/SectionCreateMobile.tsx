"use client";
import Image from "next/image";
import FeatureCard from "@/components/ui/FeatureCard";

export default function SectionCreateMobile() {
  return (
    <section>
      <Image
        src={"/img/blur-blue.png"}
        alt="blur-bleu"
        width={400}
        height={1200}
        priority
        className="absolute md:h-auto mt-96 md:mt-0 h-[55rem] w-[35rem] right-0 top-0 -z-10 object-cover"
        quality={100}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full text-center mt-20">
          <h2 className="text-xl sm:text-4xl bg-title-gradient inline-block text-transparent bg-clip-text">
            Création d’applications mobiles
          </h2>
          <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
            Transformez vos idées en expérience mobile unique
          </h3>
        </div>

        <div className="text-center mb-12">
          <FeatureCard
            title="Création d’applications mobiles sur mesures Apple/Android"
            description="Dans un monde où le mobile est devenu incontournable, Innov8 Digital conçoit des applications mobiles sur mesure pour répondre aux besoins spécifiques de votre entreprise. Que ce soit pour iOS, Android ou les deux, nos solutions allient design élégant, performance et fonctionnalités adaptées à votre public cible."
            imageSrc="/img/coaching-management.jpg"
            imageAlt="Accompagnement sur mesure"
            buttonHref="https://tidycal.com/boughanmieddy8/audit-de-votre-projet"
          />
        </div>
      </div>
    </section>
  );
}

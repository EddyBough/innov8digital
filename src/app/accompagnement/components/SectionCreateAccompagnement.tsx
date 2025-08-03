"use client";
import Image from "next/image";
import FeatureCard from "@/components/ui/FeatureCard";

export default function SectionCreateAccompagnement() {
  return (
    <section>
      <Image
        src={"/img/blur-pink.png"}
        alt="blur-bleu"
        width={400}
        height={1200}
        priority
        className="absolute md:h-auto mt-96 md:mt-0 h-[55rem] w-[35rem] right-0 top-0 -z-10 object-cover"
        quality={100}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full text-center mt-20">
          <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
            Accompagnement de projet
          </h2>
          <h1 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
            Du rêve à la réalité
          </h1>
        </div>

        <div className="text-center mb-12">
          <FeatureCard
            title="Accompagnement de projet"
            description="Vous avez une idée de projet, mais vous ne savez pas par où commencer ? Chez Innov8 Digital, nous vous accompagnons dans la réalisation de votre projet à chaque étape. De la réalisation initiale à la mise en oeuvre d'un MVP (Produit Minimum Viable). Grâce à notre expertise en stratégie digitale, développement technique et marketing, nous faisons de votre vision une réalité."
            imageSrc="/img/coaching-management.jpg"
            imageAlt="Accompagnement sur mesure"
            buttonHref="https://tidycal.com/boughanmieddy8/audit-de-votre-projet"
          />
        </div>
      </div>
    </section>
  );
}

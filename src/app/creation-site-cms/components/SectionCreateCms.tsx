"use client";
import React from "react";
import Image from "next/image";
import FeatureCard from "@/components/ui/FeatureCard";

export default function SectionCreateCms() {
  return (
    <section>
      <Image
        src={"/img/blur-sky.png"}
        alt=""
        width={400}
        height={1200}
        priority
        className="absolute md:h-auto mt-96 md:mt-0 h-[55rem] w-[35rem] right-0 top-0 -z-10 object-cover"
        quality={100}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full text-center mt-20">
          <h2 className="text-xl sm:text-4xl font-bold bg-title-gradient inline-block text-transparent bg-clip-text">
            Création de sites WordPress, Shopify et CMS
          </h2>
          <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
            L’alliance de la simplicité et de la performance
          </h3>
        </div>

        <div className="text-center mb-12">
          <FeatureCard
            title="Création de site E-Commerce CMS et CRM"
            description="Chez Innov8Digital, nous comprenons que chaque entreprise a des besoins spécifiques. C’est pourquoi nous proposons des solutions basées sur des CMS puissants et flexibles, comme WordPress, Shopify et bien d’autres, pour vous offrir un site professionnel, performant et facile à gérer."
            imageSrc="/img/wordPress.png"
            imageAlt="Équipe Innov8Digital en réunion"
            onButtonClick={() => console.log("Rendez-vous demandé")}
          />
        </div>
      </div>
    </section>
  );
}

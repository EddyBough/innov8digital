"use client";
import React from "react";
import Image from "next/image";
import FeatureCard from "@/components/ui/FeatureCard";

export default function SectionSeo() {
  return (
    <section>
      <Image
        src={"/img/blur-orangeSEO.png"}
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
            Stratégie Digitale, SEO & Marketing
          </h2>
          <h1 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
            Boostez votre visibilité en ligne
          </h1>
        </div>

        <div className="text-center mb-12">
          <FeatureCard
            title="Stratégie Digitale, SEO & Marketing"
            description="Chez Innov8Digital, nous savons qu’un site web performant n’est qu’une partie de l’équation. Pour attirer, engager et convertir vos visiteurs, une stratégie digitale solide et bien pensée est indispensable. C’est pourquoi nous vous accompagnons dans l’élaboration et la mise en œuvre de solutions de SEO et marketing digital adaptées à vos objectifs."
            imageSrc="/img/googleSEO.png"
            imageAlt="Équipe Innov8Digital en réunion"
            buttonHref="https://tidycal.com/boughanmieddy8/audit-de-votre-projet"
          />
        </div>
      </div>
    </section>
  );
}

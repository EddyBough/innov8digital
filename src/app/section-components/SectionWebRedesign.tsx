"use client";
import React from "react";
import Image from "next/image";
import PricingCard, { type Feature } from "@/components/ui/PricingCard";
import SectionMaintenanceTasks from "./SectionMaintenanceTasks";

export default function SectionWebRedesign() {
  const pricingPlans = [
    {
      title: "Refonte basique",
      price: 1100,

      features: [
        {
          text: "Refonte partielle visuelle: Modernisations couleurs, icônes & élement graphique",
          enabled: true,
        },
      ] as Feature[],
    },
    {
      title: "Refonte complète",
      price: 3800,
      features: [
        {
          text: "Refonte complète visuelle UI/UX",
          enabled: true,
        },
      ] as Feature[],
    },
  ];
  return (
    <section className="w-screen relative overflow-hidden ">
      <Image
        src={"/img/blur-orange.png"}
        alt="web redesign"
        width={1920}
        height={1080}
        className="absolute md:h-auto mt-96 md:mt-0 h-[55rem] w-[35rem] left-0 top-0 -z-10 object-cover"
      />
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="w-full text-center">
          <h2 className="text-xl sm:text-4xl font-aeonik font-bold bg-title-gradient inline-block text-transparent bg-clip-text">
            Refonte web
          </h2>
          <h3 className="lg:text-6xl text-2xl font-bold text-center lg:mb-20 mb-10">
            Voici notre offre refonte
          </h3>
        </div>

        <div className="flex flex-col md:flex-row  mb-20 justify-center items-center gap-8 w-full">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              onButtonClick={() => console.log(`Clicked on ${plan.title} plan`)}
              className="h-[507px]"
            />
          ))}
        </div>
      </div>
      <SectionMaintenanceTasks />
    </section>
  );
}

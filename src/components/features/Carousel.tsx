"use client";
import React from "react";
import { Card } from "@/src/components/ui/apple-cards-carousel";
import { Carousel } from "@/src/components/ui/apple-cards-carousel";

export function AppleCardsCarousel() {
  const projects = [
    {
      category: "Application",
      title: "Glycowatch",
      description:
        "Glycowatch est une application PWA créée pour les diabétiques, ils peuvent créer leur compte, et suivre le taux de glycémie chaque jour et l'extraire en pdf afin de le montrer à leur médecin.",
      src: "/img/GlycoWatch.png",
      projectLink: "/projects/glycowatch",
    },
    {
      category: "Application Web",
      title: "Projet 2",
      description: "Description détaillée du deuxième projet...",
      src: "/img/free-driving.png",
      projectLink: "/projects/projet2",
    },
    {
      category: "Site Web",
      title: "Projet 3",
      description: "Description détaillée du troisième projet...",
      src: "/img/Hair-time.png",
      projectLink: "/projects/projet3",
    },
  ];

  const cards = projects.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <div className="w-full  h-full">
      <Carousel items={cards} />
    </div>
  );
}

export default AppleCardsCarousel;

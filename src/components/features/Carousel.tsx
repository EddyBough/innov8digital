"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarousel() {
  const projects: Card[] = [
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

  return (
    <div className="w-full h-full">
      <Carousel items={projects} />
    </div>
  );
}

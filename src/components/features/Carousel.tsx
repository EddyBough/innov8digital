"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects = [
    {
      category: "Application",
      title: "Glycowatch",
      description:
        "Glycowatch est une application PWA créée pour les diabétiques. Ils peuvent créer leur compte et suivre le taux de glycémie chaque jour. L'application permet également d'extraire les données sous forme de PDF afin de les montrer à leur médecin.",
      src: "/img/GlycoWatch.png",
      projectLink: "/projects/glycowatch",
    },
    {
      category: "Application Web",
      title: "Free Driving",
      description:
        "FreeDriving est une application web conçue pour simplifier la gestion des rendez-vous dans une auto-école. Elle offre un tableau de bord interactif, des notifications automatiques pour les élèves et les moniteurs, et une gestion fluide des plannings pour éviter les conflits.",
      src: "/img/free-driving.png",
      projectLink: "/projects/free-driving",
    },
    {
      category: "Application Web",
      title: "Hair Time",
      description:
        "Hair Time est une application web dédiée aux salons de coiffure. Elle permet aux salons de créer un profil, de gérer leurs rendez-vous et de visualiser les créneaux disponibles. L'objectif est d'optimiser les réservations et d'améliorer l'expérience client.",
      src: "/img/Hair-time.png",
      projectLink: "/projects/hair-time",
    },
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection > 0) {
        return prevIndex === projects.length - 1 ? 0 : prevIndex + 1;
      }
      return prevIndex === 0 ? projects.length - 1 : prevIndex - 1;
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-12">
      <div className="relative h-[600px] md:h-[400px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center h-full">
              {/* Image Card */}
              <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden bg-white shadow-lg">
                <Image
                  src={projects[currentIndex].src}
                  alt={projects[currentIndex].title}
                  fill
                  className="object-cover transition-all duration-300 ease-in-out"
                  quality={90}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col space-y-4">
                <span className="text-black text-lg">
                  {projects[currentIndex].category}
                </span>
                <h3 className="text-4xl font-bold">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-black text-lg">
                  {projects[currentIndex].description}
                </p>
                <Link
                  href={projects[currentIndex].projectLink}
                  className="inline-block m-auto bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300 text-sm w-fit"
                >
                  Voir le projet
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-16 md:gap-32 mt-36 md:my-8">
        <button
          onClick={() => paginate(-1)}
          disabled={currentIndex === 0}
          className={`p-2 rounded-full bg-gray-200 transition-all duration-300 ${
            currentIndex === 0
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-gray-300"
          }`}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => paginate(1)}
          disabled={currentIndex === projects.length - 1}
          className={`p-2 rounded-full bg-gray-200 transition-all duration-300 ${
            currentIndex === projects.length - 1
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-gray-300"
          }`}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

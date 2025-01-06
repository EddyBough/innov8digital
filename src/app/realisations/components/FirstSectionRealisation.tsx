import React from "react";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

const projects = [
  {
    title: "GlycoWatch",
    description:
      "GlycoWatch est une web-app qui vous permet de suivre votre diabète quotidiennement et gratuitement. Chatbot, rapport PDF gratuit à envoyer à votre médecin, graphique qui vous donne des statistiques sur vos données quotidiennement et bien d'autres fonctionnaltés.",
    technologies: [
      {
        name: "Next.js",
        icon: "/img/nextjs-icon.png",
      },
      {
        name: "Next.js",
        icon: "/img/prisma_logo_icon.png",
      },
      {
        name: "TypeScript",
        icon: "/img/typescript-logo.svg",
      },
      {
        name: "Node.js",
        icon: "/img/postgresql-logo.svg",
      },
    ],
    projectUrl: "https://glyco-watch.vercel.app/home",
    screenshotUrl: "/img/newcapturedashboard.png",
  },
  {
    title: "Free Driving (bientôt)",
    description:
      "Free Driving est un projet créé pour un client possédant une auto-école. Il illustre nos compétences en développement web et mon engagement à créer des solutions fonctionnelles et accessibles. Développé avec Vite.js pour le frontend et Symfony pour le backend, il inclut une API REST pour la gestion des données utilisateur et des cours, Auth0 pour l'authentification des utilisateurs, ainsi que Brevo Conversations pour permettre la communication en temps réel entre enseignants et élèves. Une gestion complète du profil, de l'historique des leçons, ainsi que Stripe pour le paiement en ligne, est également incluse.",
    technologies: [
      {
        name: "React",
        icon: "/img/vitejs-logo.svg",
      },
      {
        name: "Javascript",
        icon: "/img/js.svg",
      },
      {
        name: "Symfony",
        icon: "/img/symfony.svg",
      },
      {
        name: "Node.js",
        icon: "/img/postgresql-logo.svg",
      },
    ],
    projectUrl: "https://glyco-watch.vercel.app/home",
    screenshotUrl: "/img/freedrivingscreen.svg",
  },
];

export default function FirstSectionRealisation() {
  return (
    <section className="w-screen relative overflow-hidden mt-24">
      <Image
        src={"/img/blur-blue.png"}
        alt="blur-purple"
        width={400}
        height={1200}
        priority
        className="absolute md:h-auto mt-96 md:mt-0 h-[55rem] w-[35rem] right-0 top-0 -z-10 object-cover"
        quality={100}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full text-center mb-16">
          <h1 className="text-xl sm:text-4xl  font-aeonik font-bold bg-title-gradient inline-block text-transparent bg-clip-text">
            Nos projets
          </h1>
          <h2 className="lg:text-6xl text-4xl font-bold text-center lg:mb-20 mb-10 text-black">
            Nos derniers projets livrés
          </h2>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

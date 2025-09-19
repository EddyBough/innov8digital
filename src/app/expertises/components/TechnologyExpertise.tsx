"use client";
import Image from "next/image";
import TechnologyCard from "@/components/ui/TechnologyCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const TechnologySection = () => {
  const technologies = [
    {
      name: "React",
      image: "/img/reacticon.svg",
    },
    {
      name: "Next.js",
      image: "/img/nextjs-icon.webp",
    },
    {
      name: "TypeScript",
      image: "/img/typescript-logo.svg",
    },
    {
      name: "PostgreSQL",
      image: "/img/postgresql-logo.svg",
    },
    {
      name: "Node.js",
      image: "/img/nodejs.webp",
    },
    {
      name: "Symfony",
      image: "/img/symfony.svg",
    },
  ];

  return (
    <section className="w-full lg:h-[1000px]  relative overflow-hidden mt-24 lg:pb-0 md:pb-[17rem] pb-[9rem]">
      <Image
        src={"/img/blur-blue.webp"}
        alt=""
        width={400}
        height={1200}
        loading="lazy"
        className="absolute md:h-auto lg:mt-[-5rem] mt-9  md:mt-0 h-[53rem] w-[32rem] right-0 top-0 -z-10 object-cover"
        quality={75}
      />
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Left Section - Text Content */}
          <div className="flex-1 flex flex-col justify-center order-2 md:order-1">
            <div className="w-full text-center">
              <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
                Nos services
              </h2>
            </div>
            <p className="text-lg text-black mb-8 lg:text-start text-center font-">
              Notre agence Innov8 Digital s&apos;appuie sur des technologies
              modernes pour créer des sites et applications performants et à la
              pointe de l&apos;innovation. Chaque projet fait l&apos;objet
              d&apos;une étude approfondie qui permet à nos développeurs de
              sélectionner les outils les plus adaptés à sa réalisation. Cette
              méthodologie garantit à nos clients un développement sur mesure
              pour des solutions qui répondent parfaitement à tous leurs besoins
              techniques et fonctionnels. Nous sommes également experts dans
              d&apos;autres technologies, tout dépend de vos besoins.
            </p>

            {/* Cards appear here on mobile */}
            <div className="grid grid-cols-2 gap-4 md:hidden pb-10">
              {technologies.map((tech, index) => (
                <TechnologyCard
                  key={index}
                  name={tech.name}
                  image={tech.image}
                />
              ))}
            </div>
            <Link
              href="https://tidycal.com/boughanmieddy8/audit-de-votre-projet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-black w-full text-white px-6 py-6 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-gray-800 transition-colors font-">
                Réservez un audit gratuit
              </Button>
            </Link>
          </div>

          {/* Right Section - Technology Cards */}
          <div className="hidden md:grid grid-cols-2 lg:gap-4 md:gap-3 flex-1 order-1 md:order-2">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} name={tech.name} image={tech.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;

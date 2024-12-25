import Image from "next/image";
import AppleCardsCarousel, { Card } from "@/components/ui/apple-cards-carousel";

export default function FourSection() {
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
    <section className="w-screen relative overflow-hidden">
      <Image
        src={"/img/blur-purple.png"}
        alt=""
        width={400}
        height={1200}
        priority
        className="absolute md:h-auto mt-96 md:mt-0 h-[55rem] w-[35rem] right-0 top-0 -z-10 object-cover"
        quality={100}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full text-center">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-16 bg-title-gradient inline-block text-transparent bg-clip-text">
            Nos réalisations
          </h2>
          <h1 className="font-extrabold text-5xl">
            A la pointe de l’innovation digitale
          </h1>
          <div>
            <AppleCardsCarousel items={projects} />
          </div>
        </div>
        <div className="flex justify-center w-full"></div>
      </div>
    </section>
  );
}

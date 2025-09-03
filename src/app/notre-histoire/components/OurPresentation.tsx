import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

export default function OurPresentationComponent() {
  const founders = [
    {
      name: "Eddy BOUGHANMI",
      role: "Dev Lead Fullstack et Fondateur d'INNOV8 Digital",
      image: "/img/Logo.svg",
      story:
        "Diplômé d'une licence et Bac+3/Bac+4 en Conception et Développement d'Applications j'ai travaillé pour de grandes entreprises avant de réaliser que je voulais créer quelque chose de différent. INNOV8 Digital est né de l'idée de rendre accessible à tous, des solutions qui ne l'étaient pas. Mon expertise en architecture logicielle et en développement full-stack ainsi que mon expertise en marketing digital m'a permis de concevoir des solutions innovantes pour nos clients.",
      linkedin: "https://www.linkedin.com/in/eddy-boughanmi/",
      github: "https://github.com/EddyBough?tab=repositories",
    },
    {
      name: "Dhoimir MGOMRI",
      role: "Dev Lead Front-end & Fondateur Innov8 Développement",
      image: "/img/Logo.svg",
      story:
        "Diplômé d'une licence et Bac+3/Bac+4 en Conception et Développement d'Applications, et passionné par le design et le développement web front-end, j'ai toujours cherché à allier esthétique et performance. Avec une expertise approfondie en création d'interfaces modernes et en intégration web, je me suis spécialisé dans la conception d'expériences utilisateur uniques. INNOV8 DIGITAL est pour moi une opportunité d'offrir des solutions créatives et personnalisées pour nos clients.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  ];

  return (
    <section className="w-screen relative overflow-hidden mt-24 lg:pb-52 md:pb-52 pb-16 font-">
      {/* Blur droit */}
      <Image
        src={"/img/blur-blue.png"}
        alt="blur-right"
        width={400}
        height={1200}
        priority
        className="absolute md:h-auto mt-96 md:mt-0 h-[55rem] w-[35rem] right-0 top-0 -z-10 object-cover"
        quality={100}
      />
      {/* Blur gauche */}
      <Image
        src={"/img/blur-orange.webp"}
        alt="blur-left"
        width={400}
        height={1200}
        priority
        className="absolute md:h-auto mt-96 md:mt-0 lg:h-[100%] h-[80%]  w-[35rem] left-0 top-0 -z-10 object-cover"
        quality={100}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full text-center mb-16">
          <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
            INNOV8 DIGITAL
          </h2>
          <h1 className="lg:text-6xl text-4xl font-bold text-center lg:mb-20 mb-10 text-black">
            L&apos;Histoire
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/90 rounded-2xl p-8 border border-gray-200 hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 mb-6 bg-gray-100 flex items-center justify-center rounded-full overflow-hidden">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    className="object-contain scale-90"
                    fill
                    priority
                    quality={100}
                  />
                </div>

                <h3 className="text-2xl font-bold text-black mb-2">
                  {founder.name}
                </h3>
                <p className="text-black font-medium mb-6 text-center">
                  {founder.role}
                </p>
                <p className="text-gray-700 text-center leading-relaxed mb-8">
                  {founder.story}
                </p>
                <div className="flex gap-4">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <Linkedin className="w-6 h-6 text-gray-700" />
                  </a>
                  <a
                    href={founder.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <Github className="w-6 h-6 text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Technology {
  name: string;
  icon: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Technology[];
  projectUrl: string;
  screenshotUrl: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  projectUrl,
  screenshotUrl,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch lg:min-h-[600px]">
      {/* Left side - Project info */}
      <div className="flex-1 space-y-4 lg:space-y-8 bg-white p-6 lg:p-12 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none border border-gray-200 flex flex-col justify-between">
        <div className="space-y-4 lg:space-y-8">
          <h3 className="text-2xl lg:text-4xl font-bold text-gray-900">
            {title}
          </h3>
          <p className="text-gray-700 text-base lg:text-xl leading-relaxed">
            {description}
          </p>

          {/* Technologies */}
          <div className="py-4 lg:py-8">
            <h4 className="text-gray-900 font-semibold text-lg lg:text-xl mb-4 lg:mb-6">
              Technologies utilisées
            </h4>
            <div className="flex flex-wrap gap-3 lg:gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-100 rounded-xl p-2 lg:p-3 hover:bg-gray-200 transition-colors"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                    width={400}
                    height={400}
                    priority
                    quality={100}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          <Button className="bg-black text-white px-6 py-6 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-gray-800 transition-colors font-aeonik">
            Découvrir le projet
          </Button>
        </a>
      </div>

      {/* Right side - Screenshot */}
      <div className="flex-1 bg-[#04B2BC] p-6 lg:p-12 rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none flex items-center">
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={screenshotUrl}
            alt={`Capture d'écran du projet ${title}`}
            className="w-full h-auto"
            width={400}
            height={400}
            priority
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

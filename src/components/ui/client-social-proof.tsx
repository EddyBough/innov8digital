import Image from "next/image";
import { clientsSocialProof } from "@/data/clients-social-proof";

interface ClientSocialProofProps {
  className?: string;
}

export const ClientSocialProof: React.FC<ClientSocialProofProps> = ({
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Avatars clients avec étoiles */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 mb-2 sm:mb-3">
        <div
          className="flex justify-center items-center"
          role="group"
          aria-label="Nos clients qui nous font confiance"
        >
          {/* Avatars statiques - simple et efficace */}
          {clientsSocialProof.map((client) => (
            <div
              key={client.name}
              className="relative -mr-1 sm:-mr-2"
              title={`${client.name} - ${client.company}`}
            >
              <Image
                src={client.avatar}
                alt={`${client.name} de ${client.company}`}
                width={32}
                height={32}
                className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 rounded-full border-2 border-white object-cover transition-transform duration-200 hover:scale-105"
                loading="lazy"
                quality={85}
              />
            </div>
          ))}
        </div>

        {/* 5 étoiles - SVG statique */}
        <div
          className="flex items-center gap-0.5 sm:gap-1"
          aria-label="5 étoiles sur 5"
        >
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-black-400 fill-current"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-black-400 fill-current"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-black-400 fill-current"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-black-400 fill-current"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-black-400 fill-current"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </div>

      {/* Texte explicatif en dessous */}
      <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-medium text-center">
        <span className="text-gray-900 font-bold">+20 entreprises</span> nous
        ont fait confiance
      </p>
    </div>
  );
};

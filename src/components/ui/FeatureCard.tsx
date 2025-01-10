import Image from "next/image";
import React from "react";
import { Button } from "./button";

export type FeatureCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
  onButtonClick?: () => void;
};

const FeatureCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  className = "",
  onButtonClick,
}: FeatureCardProps) => {
  return (
    <div className={`w-full max-w-2xl  lg:max-w-7xl mx-auto ${className}`}>
      <div className="rounded-[36px] shadow-lg bg-white/50 p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Content Section wrapper */}
          <div className="flex-[2] mx-6 md:mx-8 lg:mx-10 flex flex-col items-start gap-6">
            {/* Text content */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl lg:text-3xl text-left font-bold text-black">
                {title}
              </h2>
              <p className="text-gray-800 text-left text-base lg:text-lg">
                {description}
              </p>
            </div>

            {/* Image - Shown in mobile and tablet */}
            <div className="block lg:hidden w-full">
              <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>

            {/* Button */}
            <Button
              onClick={onButtonClick}
              className="mt-4 rounded-lg bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-800 transition-colors"
            >
              Réservez un rendez-vous gratuit
            </Button>
          </div>

          {/* Image - Only shown in desktop */}
          <div className="hidden lg:block flex-1 w-full">
            <div className="relative w-full lg:w-96 aspect-[16/10] rounded-[24px] overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;

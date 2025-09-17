import { motion } from "framer-motion";

import Image from "next/image";

interface ProcessCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  onClick?: () => void;
  className?: string;
}

export default function ProcessCard({
  title,
  description,
  imageSrc,
  imageAlt,
  onClick,
  className = "",
}: ProcessCardProps) {
  return (
    <motion.div
      className={`group cursor-pointer p-2 ${className}`}
      onClick={onClick}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <article className="relative h-[400px] w-full rounded-3xl p-8 overflow-hidden transition-all duration-300 bg-white shadow-lg">
        <div className="relative z-10 h-full">
          <div className="flex flex-col h-full">
            {/* Image Container - Aligned Left */}
            <div className="mb-8 flex justify-start">
              <div className="w-28 h-28 flex items-center justify-center">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={112}
                  height={112}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content - Left Aligned */}
            <div className="text-left flex-1 flex flex-col">
              <h3 className="text-2xl font-medium mb-6 text-gray-900 mt-1">
                {title}
              </h3>
              <p className="text-base leading-relaxed flex-1 text-gray-600">
                {description}
              </p>
            </div>
          </div>
        </div>
      </article>
    </motion.div>
  );
}

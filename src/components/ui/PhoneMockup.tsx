"use client";

import Image from "next/image";

const floatingIcons = [
  {
    id: 1,
    src: "/img/n8n-color.svg",
    alt: "n8n",
    position: "-top-4 -left-6 sm:-top-8 sm:-left-12 lg:-top-12 lg:-left-16",
    size: "w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20",
  },
  {
    id: 2,
    src: "/img/nextjs-icon.png",
    alt: "Next.js",
    position:
      "-bottom-2 -right-8 sm:-bottom-6 sm:-right-14 lg:-bottom-8 lg:-right-20",
    size: "w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20",
  },
  {
    id: 3,
    src: "/img/nodejs.png",
    alt: "Node.js",
    position: "top-8 -right-2 sm:top-12 sm:-right-4 lg:top-16 lg:-right-6",
    size: "w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16",
  },
  {
    id: 4,
    src: "/img/typescript-logo.svg",
    alt: "TypeScript",
    position:
      "-bottom-6 -left-2 sm:-bottom-8 sm:-left-4 lg:-bottom-12 lg:-left-8",
    size: "w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16",
  },
  {
    id: 5,
    src: "/img/make-color.svg",
    alt: "Make",
    position: "top-2 left-16 sm:top-4 sm:left-24 lg:top-8 lg:left-32",
    size: "w-11 h-11 sm:w-13 sm:h-13 lg:w-15 lg:h-15",
  },
  {
    id: 6,
    src: "/img/prisma_logo_icon.png",
    alt: "Prisma",
    position:
      "bottom-8 left-12 sm:bottom-12 sm:left-20 lg:bottom-16 lg:left-28",
    size: "w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14",
  },
  {
    id: 7,
    src: "/img/vitejs-logo.svg",
    alt: "Vite",
    position: "-top-2 right-12 sm:-top-4 sm:right-20 lg:-top-6 lg:right-28",
    size: "w-9 h-9 sm:w-11 sm:h-11 lg:w-13 lg:h-13",
  },
  {
    id: 8,
    src: "/img/stripe.svg",
    alt: "JavaScript",
    position:
      "bottom-4 right-16 sm:bottom-8 sm:right-28 lg:bottom-12 lg:right-36",
    size: "w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14",
  },
];

export function PhoneMockup() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex justify-center items-center">
      {/* Floating Icons - Positionnées pour dépasser */}
      {floatingIcons.map((icon, index) => (
        <div
          key={icon.id}
          className={`absolute ${icon.position} ${icon.size} bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-xl shadow-xl z-20 
                     hover:scale-110 hover:bg-white/20 transition-all duration-300 cursor-pointer
                     animate-pulse hover:animate-none`}
          style={{
            animationDelay: `${index * 0.2}s`,
            animationDuration: `${2 + index * 0.3}s`,
          }}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={48}
            height={48}
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </div>
      ))}

      {/* Hand holding phone - Libre positionnement */}
      <Image
        src="/img/hand3.webp"
        alt="Main tenant un téléphone avec logo Innov8"
        width={1536}
        height={1024}
        className="relative z-10 w-auto h-auto xl:ml-48 md:ml-44 lg:ml-64 ml-4"
        loading="lazy"
      />
    </div>
  );
}

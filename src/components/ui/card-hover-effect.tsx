import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import React from "react";

interface HoverEffectProps {
  items: {
    title: string;
    description: string;
    link: string;
    image: string;
  }[];
  className?: string;
}

export const HoverEffect = ({ items, className }: HoverEffectProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("flex flex-col gap-8 py-10 w-full", className)}>
      {/* Première ligne : 3 cartes */}
      <div className="flex flex-col md:flex-col lg:flex-row lg:flex-wrap lg:justify-center gap-8 w-full">
        {items.slice(0, 3).map((item, idx) => (
          <Link
            href={item.link}
            key={item.link}
            className="relative group block p-6 w-full max-w-[375px] min-h-[440px] lg:h-[440px]"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 bg-neutral-200/50 block rounded-3xl z-10"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.2, ease: "easeIn" },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <div className="w-16 h-16 relative mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <CardTitle className="font-aeonik font-semibold">
                {item.title}
              </CardTitle>
              <CardDescription className="font-aeonik font-regular">
                {item.description}
              </CardDescription>
            </Card>
          </Link>
        ))}
      </div>

      {/* Deuxième ligne : 2 cartes centrées */}
      <div className="flex flex-col md:flex-col lg:flex-row lg:justify-center gap-8 w-full">
        {items.slice(3).map((item, idx) => (
          <Link
            href={item.link}
            key={item.link}
            className="relative group block p-6 w-full max-w-[375px] min-h-[440px] lg:h-[440px]"
            onMouseEnter={() => setHoveredIndex(idx + 3)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx + 3 && (
                <motion.span
                  className="absolute inset-0 bg-neutral-200/50 block rounded-3xl z-10"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.2, ease: "easeIn" },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <div className="w-16 h-16 relative mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-3xl h-full w-full p-8 overflow-hidden shadow-lg bg-white/90 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }: CardProps) => {
  return (
    <h4 className={cn("text-black font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }: CardProps) => {
  return (
    <p
      className={cn(
        "mt-8 text-black tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

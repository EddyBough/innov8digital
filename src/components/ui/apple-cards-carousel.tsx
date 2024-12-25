"use client";

import React from "react";
import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { MoveLeft, MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export type Card = {
  src: string;
  title: string;
  category: string;
  description: string;
  projectLink: string;
};

interface CarouselProps {
  items: Card[];
}

interface CardProps {
  card: Card; // Le type Card défini ci-dessus
  layout?: boolean; // Optionnel : Layout animation
  index?: number; // Optionnel : Index de la carte
}

export const Carousel = ({ items }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const getCardWidth = () => {
    if (!carouselRef.current) return 0;
    const container = carouselRef.current.querySelector(".carousel-item");
    if (!container) return 0;

    const style = window.getComputedStyle(container);
    const gap = parseInt(style.marginRight || "0", 10);
    return container.clientWidth + gap;
  };

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      const isLastItemVisible = scrollLeft + clientWidth >= scrollWidth - 1;
      setCanScrollRight(!isLastItemVisible);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = getCardWidth();
      if (cardWidth === 0) return;

      const currentScroll = carouselRef.current.scrollLeft;
      const targetScroll =
        Math.floor(currentScroll / cardWidth) * cardWidth - cardWidth;

      carouselRef.current.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth",
      });

      requestAnimationFrame(checkScrollability);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = getCardWidth();
      if (cardWidth === 0) return;

      const currentScroll = carouselRef.current.scrollLeft;
      const maxScroll =
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      let targetScroll =
        Math.ceil(currentScroll / cardWidth) * cardWidth + cardWidth;

      targetScroll = Math.min(targetScroll, maxScroll);

      carouselRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });

      requestAnimationFrame(checkScrollability);
    }
  };

  React.useEffect(() => {
    checkScrollability();
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <div
        ref={carouselRef}
        className="flex w-full overflow-x-scroll scroll-smooth [scrollbar-width:none] py-6 md:py-20"
        onScroll={checkScrollability}
      >
        <div className="flex flex-row justify-start gap-4 md:gap-10 px-4">
          {items.map((item, i) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * i,
                  ease: "easeOut",
                },
              }}
              key={`card-${i}`}
              className="carousel-item min-w-full first:pl-0 last:pr-4"
            >
              <Card card={item} index={i} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-16 md:gap-32 mt-4 md:mt-6">
        <button
          className="relative z-40 h-8 w-8 md:h-10 md:w-10 rounded-full bg-gray-200 flex items-center justify-center disabled:opacity-50 transition-opacity"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          aria-label="Previous slide"
        >
          <MoveLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-500" />
        </button>
        <button
          className="relative z-40 h-8 w-8 md:h-10 md:w-10 rounded-full bg-gray-200 flex items-center justify-center disabled:opacity-50 transition-opacity"
          onClick={scrollRight}
          disabled={!canScrollRight}
          aria-label="Next slide"
        >
          <MoveRight className="h-5 w-5 md:h-6 md:w-6 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export const Card = ({ card, layout = false, index }: CardProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-8 items-center max-w-full px-2 md:px-0">
      <div className="w-full md:w-1/2">
        <motion.div
          layoutId={layout ? `card-${index}-${card.title}` : undefined}
          className="rounded-3xl shadow-lg bg-gray-100 dark:bg-neutral-900 h-48 md:h-[30rem] w-72 md:w-full overflow-hidden flex flex-col items-start justify-start relative z-10"
        >
          <div className="absolute h-full top-0 inset-x-0 z-30" />
          <BlurImage
            src={card.src}
            alt={card.title}
            fill
            className="object-cover absolute z-10 inset-0"
          />
        </motion.div>
      </div>
      <div className="w-full md:w-1/2 space-y-2 md:space-y-4 text-left">
        <motion.p
          layoutId={layout ? `category-${index}-${card.category}` : undefined}
          className="text-sm md:text-base font-medium text-neutral-600 dark:text-neutral-400"
        >
          {card.category}
        </motion.p>
        <motion.h3
          layoutId={layout ? `title-${index}-${card.title}` : undefined}
          className="text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200"
        >
          {card.title}
        </motion.h3>
        <p className="text-sm w-72 md:w-full md:text-lg text-neutral-600 dark:text-neutral-400">
          {card.description}
        </p>
        <Link href={card.projectLink} className="inline-block">
          <Button className="mt-2 md:mt-4 bg-black text-white px-8 md:px-12 py-4 md:py-6 rounded-full text-xs md:text-base font-medium hover:bg-gray-800 transition-colors">
            Voir le projet
          </Button>
        </Link>
      </div>
    </div>
  );
};

export const BlurImage = ({ src, className, alt, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = React.useState(true);

  return (
    <Image
      className={cn(
        "duration-300 ease-in-out",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      src={src}
      alt={alt}
      onLoad={() => setLoading(false)}
      loading="lazy"
      quality={90}
      {...rest}
    />
  );
};

// Export par défaut
export default Carousel;

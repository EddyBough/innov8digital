import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Plus } from "lucide-react";
import { useState } from "react";

interface HoverEffectProps {
  items: {
    title: string;
    link: string;
    image: string;
    cta: string;
  }[];
  className?: string;
}

export const HoverEffect = ({ items, className }: HoverEffectProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const isMobileCarousel = className?.includes("mobile-carousel-item");
  const isDesktopLayout = className?.includes("desktop-layout");

  return (
    <div
      className={cn(
        isDesktopLayout ? "container mx-auto px-4" : "",
        isMobileCarousel ? "w-full" : "",
        className
      )}
    >
      <div
        className={cn(
          isDesktopLayout ? "flex flex-wrap -mx-4 place-content-center" : "",
          isMobileCarousel ? "w-full" : ""
        )}
      >
        {items.map((item, idx) => (
          <Link
            href={item.link}
            key={item.link}
            className={cn(
              "relative group block",
              isDesktopLayout ? "p-6 w-full max-w-[400px] min-h-[500px]" : "",
              isMobileCarousel ? "w-full h-[480px] p-4" : ""
            )}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            aria-label={`En savoir plus sur ${item.title}`}
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
            <Card className={isMobileCarousel ? "mobile-card" : ""}>
              <div className="flex flex-col h-full">
                <div
                  className={cn(
                    "mb-6 bg-gray-100 rounded-lg flex items-center justify-center",
                    isMobileCarousel ? "w-28 h-28" : "w-32 h-32"
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center justify-center",
                      isMobileCarousel ? "w-16 h-16" : "w-20 h-20"
                    )}
                  >
                    <Image
                      src={item.image}
                      alt={`Icône pour ${item.title}`}
                      width={isMobileCarousel ? 64 : 80}
                      height={isMobileCarousel ? 64 : 80}
                      className={cn(
                        item.image.includes(".jpg")
                          ? "object-cover rounded-lg"
                          : "object-contain"
                      )}
                    />
                  </div>
                </div>
                <CardTitle className={isMobileCarousel ? "text-xl" : ""}>
                  {item.title}
                </CardTitle>
                <div
                  className={cn(
                    "mt-auto flex justify-between items-end",
                    isMobileCarousel ? "pt-6" : "pt-8"
                  )}
                >
                  <p className="text-s text-blue-800 max-w-[70%] flex items-center gap-2">
                    {item.cta}
                    <ArrowRight className="w-4 h-4" />
                  </p>
                  <button
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                    aria-label={`En savoir plus sur ${item.title}`}
                  >
                    <Plus className="w-5 h-5 text-black-600" />
                  </button>
                </div>
              </div>
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
      <div className="relative z-50 h-full">
        <div className="p-4 h-full">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }: CardProps) => {
  return (
    <h3 className={cn("text-2xl text-black tracking-wide mt-4", className)}>
      {children}
    </h3>
  );
};

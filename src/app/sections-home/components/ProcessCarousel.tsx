"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import ProcessCard from "./ProcessCard";
import CarouselNavigation from "./CarouselNavigation";
import { ProcessStep } from "../data/processSteps";

interface ProcessCarouselProps {
  steps: ProcessStep[];
  activeStep: number;
  onStepClick: (index: number) => void;
  className?: string;
}

export default function ProcessCarousel({
  steps,
  onStepClick,
  className = "",
}: ProcessCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      const currentScroll = scrollRef.current.scrollLeft;
      const newScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      scrollRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-[calc(50vw-160px)] sm:px-[calc(50vw-180px)] md:px-4 xl:px-0 xl:pr-0 py-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{ scrollSnapAlign: "center" }}
            className="flex-shrink-0 w-[320px] sm:w-[360px]"
          >
            <ProcessCard
              title={step.title}
              description={step.description}
              imageSrc={step.imageSrc}
              imageAlt={step.imageAlt}
              onClick={() => onStepClick(index)}
            />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <CarouselNavigation
        onPrevious={() => scrollCarousel("left")}
        onNext={() => scrollCarousel("right")}
        className="flex justify-center mt-8 xl:justify-start"
      />
    </motion.div>
  );
}

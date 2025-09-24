"use client";

import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./components/TestimonialCard";

export function TestimonialsSection() {
  return (
    <section
      className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <p
          id="testimonials-heading"
          className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6"
        >
          Témoignages clients
        </p>
        <h2 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
          Ils nous font confiance
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto xl:mt-[-50px] mt-[-20px]">
          Découvrez quelques retours de nos clients sur leurs projets digitaux
          réalisés avec INNOV8 Digital.
        </p>
      </div>

      {/* Testimonials Marquee - Dual Direction */}
      <div className="relative">
        {/* First Row - Left to Right */}
        <div className="flex overflow-hidden mb-8 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <div className="flex animate-marquee-left gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} {...testimonial} />
            ))}
            {/* Duplicate for seamless loop */}
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard key={`row1-dup-${index}`} {...testimonial} />
            ))}
          </div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <div className="flex animate-marquee-right gap-6">
            {testimonials.slice(3, 6).map((testimonial, index) => (
              <TestimonialCard key={`row2-${index}`} {...testimonial} />
            ))}
            {/* Duplicate for seamless loop */}
            {testimonials.slice(3, 6).map((testimonial, index) => (
              <TestimonialCard key={`row2-dup-${index}`} {...testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }

        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

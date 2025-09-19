import { memo } from "react";
import Image from "next/image";
import type { TestimonialProps } from "@/data/testimonials";

function TestimonialCard({
  quote,
  name,
  title,
  company,
  avatar,
}: TestimonialProps) {
  return (
    <article className="group relative bg-white rounded-3xl p-6 hover:shadow-xl transition-all duration-500 border border-gray-100/50 hover:border-gray-200/80 flex-shrink-0 w-[380px] hover:-translate-y-1">
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <blockquote className="relative z-10">
        {/* Quote text */}
        <p className="text-gray-700 text-sm leading-relaxed mb-6 font-medium">
          {quote}
        </p>

        {/* Author info */}
        <footer className="flex items-center">
          <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            {avatar ? (
              <Image
                src={avatar}
                alt={`Photo de ${name}`}
                width={48}
                height={48}
                className="w-full h-full object-cover"
                loading="lazy"
                quality={85}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                {name.charAt(0)}
              </div>
            )}
          </div>
          <div className="ml-4">
            <cite className="text-base font-bold text-gray-900 not-italic">
              {name}
            </cite>
            <p className="text-sm text-gray-500 mt-1">{title}</p>
            <p className="text-sm text-gray-400 font-medium">{company}</p>
          </div>
        </footer>
      </blockquote>
    </article>
  );
}

// memo for avoid useless renders
export default memo(TestimonialCard);

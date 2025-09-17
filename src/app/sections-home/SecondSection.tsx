"use client";
import { HoverEffect } from "../../components/ui/card-hover-effect";
import Image from "next/image";

export const services = [
  {
    title: "Création de site web sur mesure",
    cta: "Découvrir",
    image: "/img/webappicon.svg",
    link: "/creation-site-web",
  },
  {
    title: "Automatisation & Intelligence artificielle",
    cta: "Découvrir",
    image: "/img/make-color.svg",
    link: "/automatisation",
  },
  {
    title: "Création d'applications mobiles sur mesure",
    cta: "Découvrir",
    image: "/img/mobileicon.svg",
    link: "/application-mobile",
  },
  {
    title: "Création de site E-Commerce CMS",
    cta: "Découvrir",
    image: "/img/ecommerceicon.svg",
    link: "/creation-site-cms",
  },
  {
    title: "Maintenance & support technique",
    cta: "Découvrir",
    image: "/img/maintenanceicon.svg",
    link: "/maintenance",
  },
  {
    title: "Stratégie digitale SEO & marketing",
    cta: "Découvrir",
    image: "/img/seoicon.svg",
    link: "/seo",
  },
];

export default function SecondSection() {
  return (
    <section className="w-screen relative overflow-hidden">
      <Image
        src={"/img/blur-orange.webp"}
        alt=""
        width={400}
        height={1200}
        loading="lazy"
        className="absolute md:h-[38rem] lg:h-auto xl:h-auto md:w-[10rem] md:mt-0 h-[45rem] w-[35rem] lg:w-[40rem] left-0 top-0 -z-10"
        quality={75}
      />
      <Image
        src={"/img/blur-blue.webp"}
        alt=""
        width={400}
        height={1200}
        loading="lazy"
        className="absolute mt-[65rem] md:mt-[55rem] lg:mt-[15rem] h-[55rem] w-[25rem] md:w-[30rem] right-0 top-0 -z-10 object-cover hidden lg:block"
        quality={75}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full text-center">
          <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
            Nos services
          </h2>
          <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
            Visibilité. Performance. Engagement.
          </h3>
        </div>
        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-center w-full">
          <HoverEffect items={services} className="desktop-layout" />
        </div>

        {/* Mobile & Tablet Carousel */}
        <div className="lg:hidden w-full">
          <div
            id="services-carousel"
            className="flex gap-6 overflow-x-auto scroll-smooth px-4 pb-4 scrollbar-hide snap-x snap-mandatory"
          >
            {services.map((service) => (
              <div
                key={service.link}
                className="flex-shrink-0 w-80 snap-center"
              >
                <HoverEffect
                  items={[service]}
                  className="mobile-carousel-item"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-6 px-4">
            <button
              onClick={() => {
                const carousel = document.getElementById("services-carousel");
                if (carousel) carousel.scrollLeft -= 320;
              }}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200"
              aria-label="Défiler vers la gauche"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                const carousel = document.getElementById("services-carousel");
                if (carousel) carousel.scrollLeft += 320;
              }}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200"
              aria-label="Défiler vers la droite"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

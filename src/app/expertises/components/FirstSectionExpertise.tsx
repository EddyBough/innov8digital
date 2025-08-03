"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Image from "next/image";

export const services = [
  {
    title: "Création de site web sur mesure",
    cta: "Découvrir",
    image: "/img/webappicon.svg",
    link: "/creation-site-web",
  },
  {
    title: "Création de site E-Commerce CMS",
    cta: "Découvrir",
    image: "/img/ecommerceicon.svg",
    link: "/creation-site-cms",
  },
  {
    title: "Création d'applications mobiles sur mesure",
    cta: "Découvrir",
    image: "/img/mobileicon.svg",
    link: "/application-mobile",
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

export default function FirstSectionExpertise() {
  return (
    <section className="w-screen relative overflow-hidden mt-24">
      <Image
        src={"/img/blur-purple.png"}
        alt=""
        width={400}
        height={1200}
        priority
        className="absolute md:h-auto mt-96 md:mt-0 h-[55rem] w-[35rem] right-0 top-0 -z-10 object-cover"
        quality={100}
      />
      <Image
        src={"/img/blur-orange.png"}
        alt="Icône-blur"
        width={400}
        height={1200}
        priority
        className="absolute md:h-auto mt-[65rem] md:mt-[45rem] lg:mt-0 h-[65rem] w-[35rem] lg:w-[40rem] left-0 top-0 -z-10 object-cover"
        quality={100}
      />
      <Image
        src={"/img/blur-blue.png"}
        alt="blur-right"
        width={400}
        height={1200}
        priority
        className="absolute mt-[115rem] md:mt-[85rem] lg:mt-[15rem] h-[55rem] w-[25rem] md:w-[30rem] right-0 top-0 -z-10 object-cover"
        quality={100}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full text-center">
          <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
            Nos domaines d&apos;expertise
          </h2>
          <h1 className="lg:text-6xl text-4xl font-bold text-center lg:mb-20 mb-10">
            Toutes les meilleures solutions au même endroit
          </h1>
        </div>
        <div className="flex justify-center w-full ">
          <HoverEffect items={services} />
        </div>
      </div>
    </section>
  );
}

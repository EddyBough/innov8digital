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
    link: "#",
  },
  {
    title: "Création d'applications mobiles sur mesure",
    cta: "Découvrir",
    image: "/img/mobileicon.svg",
    link: "#",
  },
  {
    title: "Maintenance & support technique",
    cta: "Découvrir",
    image: "/img/maintenanceicon.svg",
    link: "#",
  },
  {
    title: "Stratégie digitale SEO & marketing",
    cta: "Découvrir",
    image: "/img/seoicon.svg",
    link: "#",
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

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full text-center">
          <h1 className="text-xl sm:text-4xl font-bold bg-title-gradient inline-block text-transparent bg-clip-text">
            Nos domaines d&apos;expertise
          </h1>
          <h2 className="lg:text-6xl text-4xl font-bold text-center lg:mb-20 mb-10">
            Toutes les meilleures solutions au même endroit
          </h2>
        </div>
        <div className="flex justify-center w-full ">
          <HoverEffect items={services} />
        </div>
      </div>
    </section>
  );
}

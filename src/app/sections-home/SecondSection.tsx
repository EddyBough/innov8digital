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
    title: "Création de site E-Commerce CMS",
    cta: "Découvrir",
    image: "/img/ecommerceicon.svg",
    link: "/creation-site-cms",
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

export default function SecondSection() {
  return (
    <section className="w-screen relative overflow-hidden">
      <Image
        src={"/img/blur-orange.png"}
        alt="Icône-blur"
        width={400}
        height={1200}
        priority
        className="absolute md:h-auto mt-96 md:mt-0 h-[65rem] w-[35rem] lg:w-[40rem] left-0 top-0 -z-10 object-cover"
        quality={100}
      />
      <Image
        src={"/img/blur-blue.png"}
        alt="blur-right"
        width={400}
        height={1200}
        priority
        className="absolute mt-[65rem] md:mt-[55rem] lg:mt-[15rem] h-[55rem] w-[25rem] md:w-[30rem] right-0 top-0 -z-10 object-cover"
        quality={100}
      />
      <Image
        src={"/img/GreenBlur.png"}
        alt="Icône-blur"
        width={400}
        height={1200}
        priority
        className="absolute mt-[95rem] md:mt-[95rem] h-[55rem] w-[25rem] left-0 top-0 -z-10 object-cover  lg:hidden"
        quality={100}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-2 bg-title-gradient inline-block text-transparent bg-clip-text">
            NOS SERVICES
          </h2>
          <h3 className="font-extrabold text-5xl mb-8">Nos prestations</h3>
        </div>
        <div className="flex justify-center w-full">
          <HoverEffect items={services} />
        </div>
      </div>
    </section>
  );
}

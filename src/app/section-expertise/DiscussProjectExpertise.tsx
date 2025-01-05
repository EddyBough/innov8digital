import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import AccordionExample from "@/components/ui/accordion-example";
import { faqExpertise } from "@/data/faq-expertise";

export default function DiscussProjectExpertise() {
  return (
    <section className="w-screen relative font-aeonik overflow-hidden">
      <Image
        src={"/img/GreenBlur.png"}
        alt="blur"
        width={400}
        height={1200}
        priority
        className="absolute md:h-auto mt-96 md:mt-0 h-[55rem] w-[35rem] left-0 top-44 -z-10 object-cover"
        quality={100}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full text-center">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-40 bg-title-gradient inline-block text-transparent bg-clip-text">
            Vous avez un projet ? Venez-en discuter
          </h2>
          <p className="font-medium text-lg max-w-xl mx-auto">
            Bénéficiez d&apos;une analyse gratuite pour la création ou la
            refonte de votre site e-commerce lors d&apos;un rendez-vous avec
            nous. Bien plus qu&apos;un simple service technique, nous nous
            engageons à vous offrir un accompagnement complet et sur mesure,
            adapté à vos besoins spécifiques.
          </p>
          <Button className="my-20 md:mb-36">
            Prendre rendez-vous pour un appel gratuit
          </Button>
        </div>
        <div className="w-full text-center pt-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-title-gradient inline-block text-transparent bg-clip-text">
            FAQ
          </h2>
        </div>
        <h2 className="lg:text-5xl text-2xl font-bold text-center lg:mb-20 mb-10">
          Vous vous posez encore des questions ? Nous y répondons
        </h2>
        <AccordionExample data={faqExpertise} />
      </div>
    </section>
  );
}

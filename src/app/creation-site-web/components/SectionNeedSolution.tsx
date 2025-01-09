import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SectionNeedSolution() {
  return (
    <section className="relative py-72 md:py-[500px] lg:py-[450px]">
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src={"/img/blur-SkyBlue.png"}
          alt=""
          width={1200}
          height={1300}
          priority
          quality={100}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Premier bloc de contenu */}
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold py-3 mb-4 md:mb-6 drop-shadow">
            Besoin d&apos;une solution web ou mobile ?
          </h2>

          <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
            <p className="text-base md:text-lg lg:text-xl w-full md:w-[30rem] mx-auto text-center px-4 text-white">
              Bénéficiez d&apos;une analyse gratuite pour la création ou la
              refonte de votre site e-commerce lors d&apos;un rendez-vous avec
              nous.
            </p>
            <p className="text-base md:text-lg lg:text-xl px-4 text-white">
              Bien plus qu&apos;un simple service technique, nous nous engageons
              à vous offrir un accompagnement complet et sur mesure, adapté à
              vos besoins spécifiques.
            </p>
          </div>

          <Link
            href="https://tidycal.com/boughanmieddy8/audit-de-votre-projet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-black text-white px-4 md:px-8 py-4 md:py-6 text-sm md:text-xl rounded-lg hover:bg-black/90 transition-colors shadow-lg">
              Réservez un appel de découverte gratuitement
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import type { Metadata } from "next";
import SectionCreateWebSite from "./components/SectionCreateWebSite";
import SectionMethodology from "./components/SectionMethodology";
import SectionNeedSolution from "./components/SectionNeedSolution";
import ContactSection from "../sections-home/ContactSection";
import AccordionExample from "@/components/ui/accordion-example";
import { faqExpertise } from "@/data/faq-expertise";

export const metadata: Metadata = {
  title: "Création de Site Web sur Mesure | Innov8Digital Marseille",
  description:
    "Création de sites web professionnels à Marseille. Sites vitrines, e-commerce et applications web sur mesure. Devis gratuit et réponse sous 24h.",
  keywords: [
    "création site web Marseille",
    "développeur web Marseille",
    "site vitrine",
    "site e-commerce",
    "développement web sur mesure",
    "agence web Marseille",
  ],
};

export default function page() {
  return (
    <main className="overflow-x-hidden">
      <SectionCreateWebSite />
      <SectionMethodology />
      <SectionNeedSolution />
      <AccordionExample data={faqExpertise} />
      <ContactSection />
    </main>
  );
}

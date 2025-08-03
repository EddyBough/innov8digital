import React from "react";
import type { Metadata } from "next";
import SectionCreateCms from "./components/SectionCreateCms";
import SectionMethodologyCms from "./components/SectionMethodologyCms";
import SectionNeedSolution from "../creation-site-web/components/SectionNeedSolution";
import AccordionExample from "@/components/ui/accordion-example";
import { faqExpertise } from "@/data/faq-expertise";
import ContactSection from "../sections-home/ContactSection";

export const metadata: Metadata = {
  title: "Création Site WordPress & Shopify | CMS sur Mesure Marseille",
  description:
    "Création de sites WordPress et Shopify à Marseille. Développement CMS personnalisé, e-commerce et solutions adaptées à vos besoins.",
  keywords: [
    "WordPress Marseille",
    "Shopify Marseille",
    "création site CMS",
    "développeur WordPress",
    "site e-commerce Shopify",
    "CMS sur mesure",
  ],
};
export default function page() {
  return (
    <main className="overflow-x-hidden">
      <SectionCreateCms />
      <SectionMethodologyCms />
      <SectionNeedSolution />
      <AccordionExample data={faqExpertise} />
      <ContactSection />
    </main>
  );
}

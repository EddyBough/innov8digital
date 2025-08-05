import React from "react";
import type { Metadata } from "next";
import SectionAutomatisation from "./components/SectionAutomatisation";
import SectionMethodologyAutomatisation from "./components/SectionMethodologyAutomatisation";
import SectionNeedSolution from "../creation-site-web/components/SectionNeedSolution";
import ContactSection from "../sections-home/ContactSection";
import AccordionExample from "@/components/ui/accordion-example";
import { faqAutomatisation } from "@/data/faq-automatisation";

export const metadata: Metadata = {
  title: "Automatisation & IA | Solutions RAG & MCP | Innov8Digital",
  description:
    "Automatisez vos processus métier avec nos solutions IA avancées : RAG, systèmes MCP, chatbots intelligents. Gagnez en efficacité et réduisez vos coûts.",
  keywords: [
    "automatisation entreprise",
    "intelligence artificielle",
    "RAG système",
    "MCP automatisation",
    "chatbot IA",
    "processus automatisés",
    "productivité entreprise",
    "solution IA sur mesure",
  ],
};

export default function page() {
  return (
    <main className="overflow-x-hidden">
      <SectionAutomatisation />
      <SectionMethodologyAutomatisation />
      <SectionNeedSolution />
      <AccordionExample data={faqAutomatisation} />
      <ContactSection />
    </main>
  );
}

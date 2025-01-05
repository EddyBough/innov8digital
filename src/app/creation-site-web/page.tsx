import React from "react";
import SectionCreateWebSite from "./components/SectionCreateWebSite";
import SectionMethodology from "./components/SectionMethodology";
import SectionNeedSolution from "./components/SectionNeedSolution";
import ContactSection from "../sections-home/ContactSection";
import AccordionExample from "@/components/ui/accordion-example";
import { faqExpertise } from "@/data/faq-expertise";

export default function page() {
  return (
    <main>
      <SectionCreateWebSite />
      <SectionMethodology />
      <SectionNeedSolution />
      <AccordionExample data={faqExpertise} />
      <ContactSection />
    </main>
  );
}

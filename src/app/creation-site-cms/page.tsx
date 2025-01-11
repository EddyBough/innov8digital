import React from "react";
import SectionCreateCms from "./components/SectionCreateCms";
import SectionMethodologyCms from "./components/SectionMethodologyCms";
import SectionNeedSolution from "../creation-site-web/components/SectionNeedSolution";
import AccordionExample from "@/components/ui/accordion-example";
import { faqExpertise } from "@/data/faq-expertise";
import ContactSection from "../sections-home/ContactSection";
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

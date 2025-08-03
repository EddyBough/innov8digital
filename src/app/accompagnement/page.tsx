import type { Metadata } from "next";
import AccordionExample from "@/components/ui/accordion-example";
import { faqExpertise } from "@/data/faq-expertise";
import SectionCreateAccompagnement from "./components/SectionCreateAccompagnement";
import SectionMethodologyAccompagnement from "./components/SectionMethodologyAccompagnement";

export const metadata: Metadata = {
  title: "Accompagnement Projet Digital | Conseil & Stratégie Marseille",
  description:
    "Accompagnement complet de vos projets digitaux à Marseille. Conseil stratégique, audit, gestion de projet et formation pour réussir votre transformation digitale.",
  keywords: [
    "accompagnement projet digital",
    "conseil stratégie digitale",
    "consultant digital Marseille",
    "transformation digitale",
    "audit projet web",
    "coaching digital",
  ],
};

export default function page() {
  return (
    <main className="overflow-x-hidden">
      <SectionCreateAccompagnement />
      <SectionMethodologyAccompagnement />
      <AccordionExample data={faqExpertise} />
    </main>
  );
}

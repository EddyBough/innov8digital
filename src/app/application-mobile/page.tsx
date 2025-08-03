import type { Metadata } from "next";
import AccordionExample from "@/components/ui/accordion-example";
import SectionCreateMobile from "./components/SectionCreateMobile";
import SectionMethodologyMobile from "./components/SectionMethodologyMobile";
import { faqExpertise } from "@/data/faq-expertise";

export const metadata: Metadata = {
  title: "Développement Application Mobile | iOS & Android Marseille",
  description:
    "Création d'applications mobiles iOS et Android à Marseille. Développement d'apps natives et hybrides sur mesure pour votre entreprise.",
  keywords: [
    "développement application mobile",
    "app iOS Android Marseille",
    "création application mobile",
    "développeur mobile Marseille",
    "application sur mesure",
    "React Native",
  ],
};

export default function page() {
  return (
    <main className="overflow-x-hidden">
      <SectionCreateMobile />
      <SectionMethodologyMobile />
      <AccordionExample data={faqExpertise} />
    </main>
  );
}

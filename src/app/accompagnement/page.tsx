import AccordionExample from "@/components/ui/accordion-example";
import { faqExpertise } from "@/data/faq-expertise";
import SectionCreateAccompagnement from "./components/SectionCreateAccompagnement";
import SectionMethodologyAccompagnement from "./components/SectionMethodologyAccompagnement";

export default function page() {
  return (
    <main className="overflow-x-hidden">
      <SectionCreateAccompagnement />
      <SectionMethodologyAccompagnement />
      <AccordionExample data={faqExpertise} />
    </main>
  );
}

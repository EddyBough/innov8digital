import AccordionExample from "@/components/ui/accordion-example";
import SectionCreateMobile from "./components/SectionCreateMobile";
import SectionMethodologyMobile from "./components/SectionMethodologyMobile";
import { faqExpertise } from "@/data/faq-expertise";

export default function page() {
  return (
    <main className="overflow-x-hidden">
      <SectionCreateMobile />
      <SectionMethodologyMobile />
      <AccordionExample data={faqExpertise} />
    </main>
  );
}

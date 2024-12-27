import AccordionExample from "@/components/ui/accordion-example";
import { faqExpertise } from "@/data/faq-expertise";
import FirstSectionExpertise from "../sections/FirstSectionExpertise";

export default function Expertises() {
  return (
    <div className="m-auto flex flex-col justify-center items-center">
      <main className=" flex flex-col min-h-screen">
        <FirstSectionExpertise />
        <AccordionExample data={faqExpertise} />
      </main>
    </div>
  );
}

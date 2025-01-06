import SectionNeedSolution from "../creation-site-web/components/SectionNeedSolution";
import FirstSectionRealisation from "./components/FirstSectionRealisation";
import AccordionExample from "@/components/ui/accordion-example";
import { faqExpertise } from "@/data/faq-expertise";

export default function Realisation() {
  return (
    <div className="m-auto flex flex-col justify-center items-center overflow-x-hidden">
      <main className=" flex flex-col min-h-screen">
        <FirstSectionRealisation />
        <SectionNeedSolution />
        <AccordionExample data={faqExpertise} />
      </main>
    </div>
  );
}

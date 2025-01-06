import FirstSectionExpertise from "./components/FirstSectionExpertise";
import SecondSectionExpertise from "./components/SecondSectionExpertise";
import SolutionExpertise from "./components/SolutionExpertise";
import TechnologySection from "./components/TechnologyExpertise";
import SectionNeedSolution from "../creation-site-web/components/SectionNeedSolution";
import AccordionExample from "@/components/ui/accordion-example";
import { faqExpertise } from "@/data/faq-expertise";

export default function Expertises() {
  return (
    <div className="m-auto flex flex-col justify-center items-center overflow-x-hidden">
      <main className=" flex flex-col min-h-screen">
        <FirstSectionExpertise />
        <SecondSectionExpertise />
        <TechnologySection />
        <SolutionExpertise />
        <SectionNeedSolution />
        <AccordionExample data={faqExpertise} />
      </main>
    </div>
  );
}

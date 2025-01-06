import AccordionExample from "@/components/ui/accordion-example";
import SectionNeedSolution from "../creation-site-web/components/SectionNeedSolution";
import OurPresentationComponent from "./components/OurPresentation";
import ValuesSection from "./components/OurValues";
import { faqHome } from "@/data/faq-home";

export default function OurStoryPage() {
  return (
    <div className="m-auto flex flex-col justify-center items-center overflow-x-hidden">
      <main className=" flex flex-col min-h-screen">
        <OurPresentationComponent />
        <ValuesSection />
        <SectionNeedSolution />
        <AccordionExample data={faqHome} />
      </main>
    </div>
  );
}

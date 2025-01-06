import FirstSection from "./sections-home/FirstSection";
import FourSection from "./sections-home/FourSection";
import SecondSection from "./sections-home/SecondSection";
import ThirdSection from "./sections-home/ThirdSection";
import ContactSection from "./sections-home/ContactSection";
import SectionNeedSolution from "./creation-site-web/components/SectionNeedSolution";
import AccordionExample from "@/components/ui/accordion-example";
import { faqHome } from "@/data/faq-home";

export default function Home() {
  return (
    <div className="m-auto flex flex-col justify-center items-center overflow-x-hidden">
      <main className=" flex flex-col min-h-screen">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourSection />
        <SectionNeedSolution />
        <AccordionExample data={faqHome} />
        <ContactSection />
      </main>
    </div>
  );
}

import { HeroSection } from "./sections-home/Hero-section";
import SecondSection from "./sections-home/SecondSection";
import FourSection from "./sections-home/FourSection";
import ThirdSection from "./sections-home/ThirdSection";
import ContactSection from "./sections-home/ContactSection";
import SectionNeedSolution from "./creation-site-web/components/SectionNeedSolution";
import AccordionExample from "@/components/ui/accordion-example";
import { faqHome } from "@/data/faq-home";
import { AnalyticsShowcase } from "./sections-home/Analytics-showcase";
import { TestimonialsSection } from "./sections-home/TestimonialsSection";

export default function Home() {
  return (
    <div className=" overflow-x-hidden">
      <main>
        <HeroSection />
        <SecondSection />
        <AnalyticsShowcase />
        <ThirdSection />
        <TestimonialsSection />
        <FourSection />
        <SectionNeedSolution />
        <AccordionExample data={faqHome} />
        <ContactSection />
      </main>
    </div>
  );
}

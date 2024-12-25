import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";
import AccordionExample from "@/components/ui/accordion-example";
import { faqHome } from "@/data/faq-home";

export default function Home() {
  return (
    <div className="m-auto flex flex-col justify-center items-center">
      <main className=" flex flex-col min-h-screen">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <AccordionExample data={faqHome} />
      </main>
    </div>
  );
}

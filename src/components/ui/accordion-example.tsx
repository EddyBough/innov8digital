"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionData {
  value: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  data: AccordionData[];
  className?: string;
}

export default function AccordionExample({ data, className }: AccordionProps) {
  return (
    <div className={`w-full max-w-3xl mx-auto ${className || ""}`}>
      <div className="w-full text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-title-gradient inline-block text-transparent bg-clip-text">
          FAQ
        </h2>
      </div>
      <h2 className="lg:text-5xl text-2xl font-bold text-center lg:mb-20 mb-10">
        Vous vous posez encore des questions ? Nous y répondons
      </h2>
      <Accordion
        type="single"
        collapsible
        className={`w-[300px] lg:w-[800px] mx-auto pb-20 ${className || ""}`}
      >
        {data.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="lg:min-h-[100px] lg:py-6 py-4"
          >
            <AccordionTrigger className="text-lg font-semibold">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-m">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

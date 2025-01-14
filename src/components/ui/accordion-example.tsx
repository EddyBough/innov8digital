"use client";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

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
      <div className="w-full text-center mt-16 md:mt-16 px-4">
        <h3 className="text-xl sm:text-4xl bg-title-gradient inline-block text-transparent bg-clip-text">
          FAQ
        </h3>
        <h4 className="text-3xl lg:text-6xl font-bold text-center mb-10 lg:mb-20">
          On répond à vos questions
        </h4>
      </div>
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

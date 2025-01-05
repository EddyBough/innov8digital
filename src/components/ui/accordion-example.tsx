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

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
        <h3 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
          FAQ
        </h3>
        <h4 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
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
            <AccordionTrigger className="text-lg ">
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

"use client";

import { useState } from "react";
import ProcessHeader from "./components/ProcessHeader";
import ProcessCarousel from "./components/ProcessCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { processSteps } from "./data/processSteps";

export default function ThirdSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      className="relative w-screen py-16 sm:py-20 lg:py-24 overflow-hidden"
      aria-labelledby="process-heading"
      style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      {/* Mobile & Tablet Layout */}
      <div className="xl:hidden">
        <ProcessHeader className="text-center mb-12 sm:mb-16 px-4 sm:px-6 lg:px-8" />

        {/* Mobile/Tablet Carousel */}
        <ProcessCarousel
          steps={processSteps}
          activeStep={activeStep}
          onStepClick={setActiveStep}
          className="px-4"
        />

        {/* Mobile CTA */}
        <div className="text-center mt-12 px-4">
          <Link
            href="https://tidycal.com/boughanmieddy8/audit-de-votre-projet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-black hover:bg-gray-600 text-white px-8 py-4 rounded-full transition-all text-lg">
              Parlons de votre projet
            </Button>
          </Link>
        </div>
      </div>

      {/* Desktop Layout (XL and above) */}
      <div className="hidden xl:block">
        <div className="mx-auto px-4 sm:px-6 lg:px-4">
          <div className="flex items-start gap-12 2xl:gap-16">
            {/* Left Content */}
            <div className="flex-shrink-0 w-1/2 max-w-2xl">
              <ProcessHeader />
            </div>

            {/* Right Carousel */}
            <div className="flex-1 min-w-0">
              <ProcessCarousel
                steps={processSteps}
                activeStep={activeStep}
                onStepClick={setActiveStep}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import SectionSeo from "./components/SectionSeo";
import SectionMethodologySeo from "./components/SectionMethodologySeo";
import SectionCarousel from "./components/SectionCarousel";
import SectionNeedSolution from "../creation-site-web/components/SectionNeedSolution";
import ContactSection from "../sections-home/ContactSection";

export default function page() {
  return (
    <main className="overflow-x-hidden">
      <SectionSeo />
      <SectionMethodologySeo />
      <SectionCarousel />
      <SectionNeedSolution />
      <ContactSection />
    </main>
  );
}

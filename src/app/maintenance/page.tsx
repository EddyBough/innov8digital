import React from "react";
import SectionMaintenance from "./components/SectionMaintenance";
import SectionMethodologyMaintenance from "./components/SectionMethodologyMaintenance";
import SectionCarousel from "../seo/components/SectionCarousel";
import SectionNeedSolution from "../creation-site-web/components/SectionNeedSolution";
import ContactSection from "../sections-home/ContactSection";

export default function page() {
  return (
    <main className="overflow-x-hidden">
      <SectionMaintenance />
      <SectionMethodologyMaintenance />
      <SectionCarousel />
      <SectionNeedSolution />
      <ContactSection />
    </main>
  );
}

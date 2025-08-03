import React from "react";
import type { Metadata } from "next";
import SectionMaintenance from "./components/SectionMaintenance";
import SectionMethodologyMaintenance from "./components/SectionMethodologyMaintenance";
import SectionCarousel from "../seo/components/SectionCarousel";
import SectionNeedSolution from "../creation-site-web/components/SectionNeedSolution";
import ContactSection from "../sections-home/ContactSection";

export const metadata: Metadata = {
  title: "Maintenance Site Web & Support Technique | Innov8Digital",
  description:
    "Service de maintenance et support technique pour sites web et applications. Mises à jour, sécurité, sauvegarde et support réactif 24/7.",
  keywords: [
    "maintenance site web",
    "support technique Marseille",
    "maintenance WordPress",
    "sécurité site web",
    "sauvegarde site",
    "support web 24/7",
  ],
};

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

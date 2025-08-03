import React from "react";
import type { Metadata } from "next";
import SectionSeo from "./components/SectionSeo";
import SectionMethodologySeo from "./components/SectionMethodologySeo";
import SectionCarousel from "./components/SectionCarousel";
import SectionNeedSolution from "../creation-site-web/components/SectionNeedSolution";
import ContactSection from "../sections-home/ContactSection";

export const metadata: Metadata = {
  title: "SEO & Marketing Digital | Référencement Naturel Marseille",
  description:
    "Expert SEO et marketing digital à Marseille. Optimisation de votre référencement naturel, campagnes Google Ads et stratégie digitale complète.",
  keywords: [
    "SEO Marseille",
    "référencement naturel",
    "marketing digital",
    "Google Ads",
    "consultant SEO",
    "agence SEO Marseille",
  ],
};

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

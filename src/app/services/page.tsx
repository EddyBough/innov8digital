import React from "react";
import SectionOffersWebSite from "./components/SectionOffersWebSite";
import EcommerceCRMSection from "./components/EcommerceCRMSection";
import SectionWebRedesign from "./components/SectionWebRedesign";

export default function page() {
  return (
    <div className="m-auto flex flex-col justify-center items-center">
      <main className=" flex flex-col min-h-screen">
        <SectionOffersWebSite />
        <EcommerceCRMSection />
        <SectionWebRedesign />
      </main>
    </div>
  );
}

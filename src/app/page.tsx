import FirstSection from "./sections-home/FirstSection";
import FourSection from "./sections-home/FourSection";
import SecondSection from "./sections-home/SecondSection";
import ThirdSection from "./sections-home/ThirdSection";

import React from "react";
import DiscussProject from "./sections-home/DiscussProject";
import ContactSection from "./sections-home/ContactSection";

export default function Home() {
  return (
    <div className="m-auto flex flex-col justify-center items-center">
      <main className=" flex flex-col min-h-screen">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourSection />
        <DiscussProject />
        <ContactSection />
      </main>
    </div>
  );
}

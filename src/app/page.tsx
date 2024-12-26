import FirstSection from "./sections/FirstSection";
import FourSection from "./sections/FourSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";

import React from "react";
import DiscussProject from "./sections/DiscussProject";

export default function Home() {
  return (
    <div className="m-auto flex flex-col justify-center items-center">
      <main className=" flex flex-col min-h-screen">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourSection />
        <DiscussProject />
      </main>
    </div>
  );
}

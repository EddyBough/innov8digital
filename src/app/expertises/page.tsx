import DiscussProjectExpertise from "./components/DiscussProjectExpertise";
import FirstSectionExpertise from "./components/FirstSectionExpertise";
import SecondSectionExpertise from "./components/SecondSectionExpertise";
import SolutionExpertise from "./components/SolutionExpertise";
import TechnologySection from "./components/TechnologyExpertise";

export default function Expertises() {
  return (
    <div className="m-auto flex flex-col justify-center items-center">
      <main className=" flex flex-col min-h-screen">
        <FirstSectionExpertise />
        <SecondSectionExpertise />
        <TechnologySection />
        <SolutionExpertise />
        <DiscussProjectExpertise />
      </main>
    </div>
  );
}

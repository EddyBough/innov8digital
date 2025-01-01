import DiscussProjectExpertise from "../section-expertise/DiscussProjectExpertise";
import FirstSectionExpertise from "../section-expertise/FirstSectionExpertise";
import SecondSectionExpertise from "../section-expertise/SecondSectionExpertise";
import TechnologySection from "../section-expertise/TechnologyExpertise";

export default function Expertises() {
  return (
    <div className="m-auto flex flex-col justify-center items-center">
      <main className=" flex flex-col min-h-screen">
        <FirstSectionExpertise />
        <SecondSectionExpertise />
        <TechnologySection />
        <DiscussProjectExpertise />
      </main>
    </div>
  );
}

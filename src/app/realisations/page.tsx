import DiscussProject from "../sections-home/DiscussProject";
import FirstSectionRealisation from "./components/FirstSectionRealisation";

export default function Realisation() {
  return (
    <div className="m-auto flex flex-col justify-center items-center">
      <main className=" flex flex-col min-h-screen">
        <FirstSectionRealisation />
        <DiscussProject />
      </main>
    </div>
  );
}

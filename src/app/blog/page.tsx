import Image from "next/image";
import { FeaturedPosts } from "./components/featured-posts";
import type { Metadata } from "next";
import SectionNeedSolution from "../creation-site-web/components/SectionNeedSolution";
import ContactSection from "../sections-home/ContactSection";

export const metadata: Metadata = {
  title: "Blog Innov8 Digital | Actualités & Insights sur le Développement Web",
  description:
    "Découvrez nos derniers articles sur le développement web, le marketing digital et les tendances technologiques.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Blur Effects */}
      <Image
        src="/img/blur-purple.png"
        alt="effet de flou violet"
        width={400}
        height={200}
        priority
        className="absolute md:h-auto mt-96 md:mt-0 h-[55rem] w-[35rem] right-0 top-0 -z-10 object-cover"
      />
      <Image
        src="/img/blur-orange.webp"
        alt="effet de flou orange"
        width={400}
        height={200}
        priority
        className="absolute md:h-auto mt-[65rem] md:mt-[45rem] lg:mt-0 h-[65rem] w-[35rem] lg:w-[40rem] left-0 top-0 -z-10 object-cover"
      />

      <div className="max-w-7xl mx-auto px-4 py-16 mt-16">
        <header className="text-center mb-16">
          <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
            Notre Blog
          </h2>
          <h1 className="lg:text-6xl text-4xl font-bold mt-4">
            Actualités & Insights
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Découvrez nos derniers articles sur le développement web, le
            marketing digital et les tendances technologiques.
          </p>
        </header>

        <FeaturedPosts />
      </div>
      <div>
        <SectionNeedSolution />
      </div>
      <div>
        <ContactSection />
      </div>
    </main>
  );
}

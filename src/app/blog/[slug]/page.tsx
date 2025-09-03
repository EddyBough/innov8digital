import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const articlesMap: Record<
  string,
  () => Promise<{ default: React.ComponentType }>
> = {
  "evolution-ia-2025": () => import("../components/evolution-ia"),
  "investir-agence-digitale-2025": () => import("../components/invest-agency"),
  "automatisation-entreprise-2025": () =>
    import("../components/automatisation-entreprise-2025"),
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Attendre que params soit résolu
  const { slug } = await params;

  if (!articlesMap[slug]) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-gray-600">
          Article non trouvé
        </h1>
      </main>
    );
  }

  // Charger dynamiquement le composant correspondant
  const Article = (await articlesMap[slug]()).default;

  return (
    <main className="min-h-screen relative overflow-hidden">
      <Image
        src="/img/blur-blue.png"
        alt=""
        width={400}
        height={1200}
        loading="lazy"
        className="absolute md:h-auto mt-96 md:mt-0 h-[55rem] w-[35rem] right-0 top-0 -z-10 object-cover"
        quality={75}
      />

      <div className="w-full text-center py-16 mt-16">
        <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
          Blog Innov8 Digital
        </h2>
        <h2 className="lg:text-6xl text-4xl font-bold mt-4">
          Actualités & Insights
        </h2>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux articles
        </Link>
        <Article />
      </div>
    </main>
  );
}

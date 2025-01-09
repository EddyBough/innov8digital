"use client";

import GlassCard from "@/components/ui/GlassCard";
import { Cloud, Rocket, TrendingUp } from "lucide-react";

const SolutionExpertise = () => {
  return (
    <section className="w-screen relative overflow-hidden pt-9">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full text-center">
          <h2 className="text-xl sm:text-4xl bg-title-gradient inline-block text-transparent bg-clip-text">
            Avantages de nos solutions
          </h2>
          <h3 className="lg:text-6xl text-4xl font-bold text-center lg:mb-20 mb-10">
            Flexibilité. Performance. Maîtrise.
          </h3>
        </div>
        <div className="flex justify-center w-full ">
          <div className="w-full py-20 px-4 font-aeonik">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <GlassCard
                icon={<Cloud size={48} />}
                title="Flexibilité sur mesure"
                description="Avec Next.js et Node.js, nous concevons des solutions flexibles et évolutives, parfaitement adaptées à vos besoins. En combinant ces technologies à la puissance de Symfony, nous créons des applications qui s’intègrent harmonieusement à votre écosystème."
              />
              <GlassCard
                icon={<Rocket size={48} />}
                title="Performance optimisée"
                description="Grâce à PostgreSQL pour la gestion rapide des données et à Docker pour des déploiements sécurisés, nous garantissons des performances optimales. Associées à Node.js, nos solutions sont prêtes à répondre aux exigences des projets les plus complexes."
              />
              <GlassCard
                icon={<TrendingUp size={48} />}
                title="Maîtrise et design d'excellence"
                description="Nous allions l’efficacité technique à un design irréprochable. Avec Figma, chaque interface est pensée pour offrir une expérience utilisateur fluide et intuitive. Nos technologies, comme Next.js et Symfony, apportent une maîtrise complète pour des résultats de haute qualité."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionExpertise;

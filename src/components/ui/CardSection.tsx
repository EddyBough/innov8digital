"use client";

import GlassCard from "./GlassCard";
import { HeartHandshake, Infinity, MessageCircle } from "lucide-react";

const CardSection = () => {
  return (
    <div className="w-full py-20 px-4 font-">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <article className="h-full">
          <GlassCard
            icon={<HeartHandshake size={48} />}
            title={
              <div className="text-lg font-bold font-">
                Une attention unique
              </div>
            }
            description="Contrairement aux grandes agences qui enchaînent les projets, nous avons fait le choix d’être une agence à taille humaine, où chaque client bénéficie d’un accompagnement personnalisé."
          />
        </article>
        <article className="h-full">
          <GlassCard
            icon={<Infinity size={48} />}
            title={
              <div className="text-lg font-bold font-">
                Un partenariat durable
              </div>
            }
            description="Notre objectif n’est pas simplement de livrer un projet, mais de bâtir une relation de confiance à long terme. Nous sommes à vos côtés pour anticiper vos besoins futurs et faire évoluer vos outils."
          />
        </article>
        <article className="h-full">
          <GlassCard
            icon={<MessageCircle size={48} />}
            title={
              <div className="text-lg font-bold">
                Un contact direct et humain
              </div>
            }
            description="Pas de couche administrative inutile ni d’interlocuteurs multiples. 
            Vous collaborez directement avec nous pour garantir fluidité, transparence et efficacité. Simple, clair et net."
          />
        </article>
      </div>
    </div>
  );
};

export default CardSection;

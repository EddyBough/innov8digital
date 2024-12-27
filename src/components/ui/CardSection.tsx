import React from "react";
import GlassCard from "./GlassCard";
import { HeartHandshake, Infinity, MessageCircle } from "lucide-react";

const CardSection = () => {
  return (
    <div className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <GlassCard
          icon={<HeartHandshake size={48} />}
          title="Une attention unique"
          description="Contrairement aux grandes agences qui enchaînent les projets, nous avons fait le choix d’être une agence à taille humaine, où chaque client bénéficie d’un accompagnement personnalisé."
        />
        <GlassCard
          icon={<Infinity size={48} />}
          title="Un partenariat durable"
          description="Notre objectif n’est pas simplement de livrer un projet, mais de bâtir une relation de confiance à long terme. Nous sommes à vos côtés pour anticiper vos besoins futurs et faire évoluer vos outils."
        />
        <GlassCard
          icon={<MessageCircle size={48} />}
          title="Un contact direct et humain"
          description="Pas de couche administrative inutile ni d’interlocuteurs multiples. 
          Vous collaborez directement avec nous pour garantir fluidité, transparence et efficacité."
        />
      </div>
    </div>
  );
};

export default CardSection;

"use client";
import { ReactNode } from "react";

type GlassCardProps = {
  title: ReactNode;
  description: ReactNode;
  icon: React.ReactNode;
};

const GlassCard = ({ title, description, icon }: GlassCardProps) => {
  return (
    <div className="backdrop-blur-md bg-white/10 p-6 rounded-xl border border-white/20 shadow-xl  hover:shadow-2xl transition-all duration-300 flex flex-col items-center gap-4 min-h-[250px]">
      <div className="text-[#439BE6] w-12 h-12">{icon}</div>
      <h3 className="text-xl font-semibold text-black text-center">{title}</h3>
      <p className="text-black text-center">{description}</p>
    </div>
  );
};

export default GlassCard;

import React from "react";

export type PrestationCardProps = {
  title: string;
  description: string;
  className?: string;
};

const PrestationCard = ({
  title,
  description,
  className = "",
}: PrestationCardProps) => {
  return (
    <div
      className={`backdrop-blur-md bg-white/10 p-6 rounded-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center gap-4  ${className}`}
    >
      <h3 className="text-xl font-semibold text-black text-center">{title}</h3>

      <p className="text-black text-center">{description}</p>
    </div>
  );
};

export default PrestationCard;

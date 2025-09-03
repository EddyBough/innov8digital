"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";
import { GaugeChart } from "./Gaugechart";
import { PureAreaChart } from "@/components/charts/PureAreaChart";
import { PureBarChart } from "@/components/charts/PureBarChart";
import Image from "next/image";

const downloadData = Array.from({ length: 20 }, (_, i) => ({
  name: i,
  value: Math.floor(Math.random() * 50) + 50,
}));

const barData = Array.from({ length: 6 }, () => ({
  first: Math.floor(Math.random() * 100),
  second: Math.floor(Math.random() * 100),
  third: Math.floor(Math.random() * 100),
}));

export function AnalyticsShowcase() {
  const [count, setCount] = useState(0);
  const [subscriptions, setSubscriptions] = useState(0); // eslint-disable-line @typescript-eslint/no-unused-vars

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < 101900) return prev + 2000;
        clearInterval(timer);
        return 101900;
      });
    }, 100);

    const subTimer = setInterval(() => {
      setSubscriptions((prev) => {
        if (prev < 67900) return prev + 2000;
        clearInterval(subTimer);
        return 67900;
      });
    }, 100);

    return () => {
      clearInterval(timer);
      clearInterval(subTimer);
    };
  }, []);

  return (
    <section
      className="relative w-full max-w-7xl mx-auto px-4 py-20 grid gap-20"
      aria-labelledby="analytics-showcase-title"
    >
      <Image
        src={"/img/blur-orange-rouge.webp"}
        alt=""
        width={400}
        height={1200}
        loading="lazy"
        className="absolute top-[30rem] h-[55rem] w-[55rem] md:h-auto mt-96 md:mt-96 md:left-44 md:top-20 md:w-[80rem] lg:left-[30rem] lg:top-3 lg:w-[85rem] -z-10 object-cover"
        quality={75}
      />

      <div className="w-full text-center mt-20">
        <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
          Analyse de vos solutions
        </h2>
        <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
          Boostez votre entreprise grâce aux data
        </h3>
      </div>

      {/* Première section */}
      <article
        className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 items-center"
        aria-labelledby="total-visits-title"
      >
        <Card
          className="p-16 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden"
          aria-labelledby="total-visits-title"
        >
          <h3 id="total-visits-title" className="text-sm font-medium mb-2">
            Total Visites
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold">{count.toLocaleString()}</span>
            <span className="text-green-500 text-sm">+12.3%</span>
          </div>
          <PureAreaChart data={downloadData} />
        </Card>
        <div>
          <h3 className="text-3xl font-bold mb-4">
            Suivez la croissance de votre entreprise en ligne
          </h3>
          <p className="text-black mb-4">
            Obtenez une vue d’ensemble claire de l’impact de vos campagnes
            marketing et des performances de votre solution digitale. Nos
            analyses vous permettent de prendre des décisions éclairées et
            stratégiques.
          </p>
        </div>
      </article>

      {/* Seconde section */}
      <article
        className="grid md:grid-cols-2 gap-8 items-center"
        aria-labelledby="user-experience-title"
      >
        <div>
          <h3 id="user-experience-title" className="text-3xl font-bold mb-4">
            Optimisation de l&apos;expérience utilisateur
          </h3>
          <p className="text-black mb-4">
            Offrez une expérience inégalée à vos utilisateurs pour les fidéliser
            et augmenter vos conversions.
          </p>
        </div>
        <Card
          className="p-6 bg-gradient-to-br from-gray-50 to-white"
          aria-labelledby="last-6-months-title"
        >
          <h3 id="last-6-months-title" className="text-sm font-medium mb-2">
            6 derniers mois
          </h3>
          <div className="text-green-500 text-sm mb-4">+24.1%</div>
          <div className="h-[200px]">
            <PureBarChart data={barData} />
          </div>
        </Card>
      </article>

      {/* Troisième section */}
      <article
        className="grid md:grid-cols-2 gap-8 items-center"
        aria-labelledby="conversion-title"
      >
        <Card className="p-6 relative" aria-labelledby="conversion-title">
          <GaugeChart />
        </Card>
        <div>
          <h3 id="conversion-title" className="text-3xl font-bold mb-4">
            Conversion & Fidélisation
          </h3>
          <p className="text-black mb-4">
            Maximisez vos résultats avec des insights et stratégies basées sur
            les données et des tests qui produisent des résultats mesurables.
          </p>
        </div>
      </article>
    </section>
  );
}

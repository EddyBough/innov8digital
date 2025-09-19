"use client";

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
  // Valeurs statiques pour optimiser les performances
  const totalVisits = 101900;

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
          Tableaux de bord & Analytics
        </h2>
        <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
          Intégrez des tableaux de bord dans vos solutions
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
            Visiteurs uniques / mois
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold">
              {totalVisits.toLocaleString()}
            </span>
            <span className="text-green-500 text-sm">+12.3%</span>
          </div>
          <PureAreaChart data={downloadData} />
        </Card>
        <div>
          <h3 className="text-3xl font-bold mb-4">
            Développement de dashboards personnalisés
          </h3>
          <p className="text-black mb-4">
            Comment mesurer votre croissance si vous ne pouvez pas la mesurer ?
            <br />
            Nous intégrons des interfaces de suivi dans vos applications web et
            mobiles. Visualisez vos données métier en temps réel avec des
            graphiques interactifs et des KPIs adaptés.
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
            Interfaces utilisateur optimisées pour la conversion
          </h3>
          <p className="text-black mb-4">
            Nous concevons des parcours utilisateur fluides et des interfaces
            intuitives. Chaque élément est pensé pour guider vos utilisateurs
            vers l&apos;action souhaitée, que ce soit un achat, une inscription
            ou une prise de contact.
          </p>
        </div>
        <Card
          className="p-6 bg-gradient-to-br from-gray-50 to-white"
          aria-labelledby="last-6-months-title"
        >
          <h3 id="last-6-months-title" className="text-sm font-medium mb-2">
            Performance UX
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
            Solutions e-commerce et systèmes de paiement
          </h3>
          <p className="text-black mb-4">
            Développement d&apos;applications e-commerce complètes avec
            intégration de passerelles de paiement sécurisées. Nous créons des
            solutions sur-mesure adaptées à votre modèle économique et à vos
            besoins spécifiques.
          </p>
        </div>
      </article>
    </section>
  );
}

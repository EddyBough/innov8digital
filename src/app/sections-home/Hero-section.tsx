"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { StatsGrid } from "@/components/ui/StatsGrid";
import Image from "next/image";

const clientLogos = [
  "AIM SERVICES",
  "GLYCOWATCH",
  "MKL DEVOPS",
  "MP SOLUTIONS",
  "ASAC",
  "STELLAR PROPRETE",
];

export function HeroSection() {
  const [email, setEmail] = useState("");

  const handleGetQuote = () => {
    window.open(
      "https://tidycal.com/boughanmieddy8/audit-de-votre-projet",
      "_blank"
    );
  };

  return (
    <>
      {/* Hero Section */}
      <main className="relative min-h-screen bg-[#fcfeff] pt-28 lg:pt-36 pb-24 lg:pb-40">
        {/* Background Blurs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Background Blurs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Blur Blue */}
            <Image
              src="/img/blur-blue.png"
              alt=""
              width={900}
              height={900}
              className="absolute left-[30%] top-[5%] opacity-80 xl:blur-[80px] blur-[240px] object-contain"
              priority
            />

            {/* Blur Purple */}
            <Image
              src="/img/blur-purple.png"
              alt="blur purple"
              width={900}
              height={900}
              className="absolute right-[5%] top-[10%] opacity-60 xl:blur-[120px] blur-[240px] object-contain"
              priority
            />
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
          <div className="text-center max-w-4xl sm:max-w-5xl mx-auto">
            {/* Small Text */}
            <AnimatedText
              className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6"
              delay={0}
            >
              AGENCE INNOV8 DIGITAL
            </AnimatedText>

            {/* Main Headline */}
            <AnimatedText className="" delay={0.2} y={30}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-8 sm:mb-12 leading-tight">
                Gagnez +30h/semaine et plus de clients grâce à un{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  écosystème digital automatisé
                </span>
              </h1>
            </AnimatedText>

            {/* CTA Section */}
            <AnimatedText
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 sm:mb-8 max-w-2xl mx-auto"
              delay={0.4}
              y={30}
            >
              <div className="relative flex-1 w-full">
                <input
                  type="email"
                  placeholder="Votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg lg:text-xl bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 shadow-xl placeholder-gray-400 text-center"
                  aria-label="Votre email"
                />
              </div>
              <Button
                onClick={handleGetQuote}
                className="bg-gray-900 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg lg:text-xl hover:bg-gray-800 shadow-xl flex items-center gap-2 sm:gap-3 whitespace-nowrap"
              >
                Je demande mon audit gratuit
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </AnimatedText>

            <AnimatedText
              className="text-gray-500 text-sm sm:text-base"
              delay={0.6}
            >
              Consultation gratuite • Réponse sous 24h • Devis détaillé • 0
              spams garantis
            </AnimatedText>
          </div>
        </div>

        {/* App Showcase Section */}
        <section
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20"
          aria-labelledby="showcase-title"
        >
          {/* Client Logos - Au-dessus du rectangle */}
          <AnimatedText
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12"
            delay={0.8}
            y={30}
          >
            {clientLogos.map((logo, index) => (
              <span
                key={index}
                className="text-gray-600 font-semibold text-sm sm:text-base lg:text-lg hover:text-gray-900 transition-colors duration-300"
              >
                {logo}
              </span>
            ))}
          </AnimatedText>

          {/* Rectangle noir avec Phone Mockup */}
          <AnimatedText
            className="bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 relative"
            delay={1}
            y={50}
          >
            {/* Phone Mockup - Peut maintenant dépasser */}
            <div className="relative -mx-4 sm:-mx-8 lg:-mx-12">
              <PhoneMockup />
            </div>
          </AnimatedText>
        </section>

        {/* Statistics Section */}
        <section
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-labelledby="stats-title"
        >
          <AnimatedText
            className="text-center mb-12 sm:mb-16"
            delay={1.2}
            y={30}
          >
            <h2
              id="stats-title"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6"
            >
              L&apos;agence qui transforme votre business en machine, concentrez
              vous sur votre business.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4">
              Sites web, apps mobiles et automatisations IA sur-mesure pour PME,
              startups et indépendants.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 lg:gap-12 text-gray-400 text-sm sm:text-base">
              <span>Startups</span>
              <span>PME</span>
              <span>Grands comptes</span>
            </div>
          </AnimatedText>

          {/* Stats Grid */}
          <StatsGrid />
        </section>
      </main>
    </>
  );
}

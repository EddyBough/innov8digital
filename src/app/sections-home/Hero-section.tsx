"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { StatsGrid } from "@/components/ui/StatsGrid";
import { ClientSocialProof } from "@/components/ui/client-social-proof";
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

  const handleGetQuote = async () => {
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "hero-section" }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe to newsletter");
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
    }

    window.open(
      "https://tidycal.com/boughanmieddy8/audit-de-votre-projet",
      "_blank"
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-[#fcfeff] pt-28 lg:pt-36 pb-24 lg:pb-40">
        {/* Background Blurs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Background Blurs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Blur Blue */}
            <Image
              src="/img/blur-blue.webp"
              alt=""
              width={900}
              height={900}
              className="absolute left-[30%] top-[5%] opacity-80 blur-[60px] sm:blur-[80px] lg:blur-[80px] xl:blur-[80px] object-contain"
              priority
            />

            {/* Blur Purple */}
            <Image
              src="/img/blur-purple.webp"
              alt=""
              width={900}
              height={900}
              className="absolute right-[5%] top-[10%] opacity-60 blur-[80px] sm:blur-[100px] lg:blur-[120px] xl:blur-[120px] object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
          <div className="text-center max-w-4xl sm:max-w-5xl mx-auto">
            {/* Small Text */}
            <AnimatedText
              className="text-xs sm:text-sm uppercase tracking-widest font-medium mb-4 sm:mb-6"
              delay={0}
            >
              <p className="text-gray-500">AGENCE INNOV8 DIGITAL</p>
            </AnimatedText>

            {/* Main Headline */}
            <AnimatedText className="" delay={0.2} y={30}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight">
                Applications, solutions web intelligentes connectées à l&apos;IA
                et sur mesure pour{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  votre entreprise
                </span>
              </h1>
            </AnimatedText>

            {/* Social Proof avec clients */}
            <AnimatedText className="mb-8 sm:mb-12" delay={0.3} y={20}>
              <ClientSocialProof />
            </AnimatedText>

            {/* CTA Section */}
            <AnimatedText
              className="mb-6 sm:mb-8 max-w-2xl mx-auto"
              delay={0.4}
              y={30}
            >
              <form
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleGetQuote();
                }}
              >
                {/* Mobile/Tablet: Input séparé */}
                <div className="relative flex-1 w-full sm:hidden">
                  <label htmlFor="email-input-mobile" className="sr-only">
                    Votre adresse email
                  </label>
                  <input
                    id="email-input-mobile"
                    type="email"
                    placeholder="Votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 text-base bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 shadow-xl placeholder-gray-400 text-center"
                    required
                  />
                </div>

                {/* Desktop: Input avec bouton intégré */}
                <div className="relative flex-1 w-full hidden sm:block">
                  <label htmlFor="email-input-desktop" className="sr-only">
                    Votre adresse email
                  </label>
                  <input
                    id="email-input-desktop"
                    type="email"
                    placeholder="Votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 lg:px-8 py-4 lg:py-5 text-base lg:text-xl bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 shadow-xl placeholder-gray-400 text-center lg:text-left pr-48 lg:pr-52"
                    required
                  />
                  <Button
                    type="submit"
                    className="absolute lg:h-14 xl:h-14 right-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 lg:px-6 py-2 lg:py-4 rounded-full text-sm lg:text-base hover:bg-gray-800 shadow-lg flex items-center gap-2 whitespace-nowrap"
                  >
                    <span className="hidden lg:inline">
                      Je demande mon audit gratuit
                    </span>
                    <span className="lg:hidden">Audit gratuit</span>
                    <svg
                      className="w-4 h-4 lg:w-5 lg:h-5"
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
                </div>

                {/* Mobile/Tablet: Bouton séparé */}
                <Button
                  type="submit"
                  className="bg-gray-900 text-white px-6 py-4 rounded-full text-base hover:bg-gray-800 shadow-xl flex items-center gap-3 whitespace-nowrap sm:hidden"
                >
                  Je demande mon audit gratuit
                  <svg
                    className="w-4 h-4"
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
              </form>
            </AnimatedText>

            <AnimatedText
              className="text-gray-500 text-sm sm:text-base"
              delay={0.6}
            >
              Inscription à notre newsletter conseil • 0 spams garantis
            </AnimatedText>
          </div>
        </div>

        {/* App Showcase Section */}
        <section
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20"
          aria-labelledby="showcase-title"
        >
          <h2 id="showcase-title" className="sr-only">
            Nos clients et démonstration de nos solutions
          </h2>
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
              Fini les contraintes, libérez votre temps pour votre business.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4">
              Sites web, apps mobiles intelligents et automatisations IA
              sur-mesure pour PME, startups et indépendants.
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
      </section>
    </>
  );
}

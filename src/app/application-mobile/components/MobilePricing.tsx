"use client";
import PricingCard, { Feature } from "@/components/ui/PricingCard";
import Image from "next/image";
import Carousel from "@/components/features/Carousel";

export default function MobilePrice() {
  const cmsPrice = [
    {
      title: "Essentielle",
      subtitle:
        "Une solution simple pour lancer une application mobile fonctionnelle rapidement.",
      price: "Sur devis",
      badge: "populaire" as const,
      features: [
        { text: "Audit approfondi", enabled: true },
        { text: "Application hybride (iOS & Android)", enabled: true },
        { text: "Design sur mesure", enabled: true },
        {
          text: "Intégration de fonctionnalités de base : Page d’accueil, formulaire de contact ou inscription, navigation simple ",
          enabled: true,
        },
        { text: "Publication sur App Store et Google Play.", enabled: true },
      ] as Feature[],
    },
    {
      title: "Standard",
      subtitle:
        "Une application mobile avec des fonctionnalités supplémentaires pour engager votre audience.",
      price: "Sur devis",
      badge: "recommandé" as const,
      features: [
        { text: "Fonctionnalité de l’offre Essentielle.", enabled: true },
        {
          text: "Design amélioré avec personnalisation avancée du thème",
          enabled: true,
        },
        {
          text: "Design UX/UI personnalisé sur Figma.",
          enabled: true,
        },
        {
          text: "Fonctionnalités interactives : notifications push, intégration d’API tierces, gestion de compte utilisateur.",
          enabled: true,
        },
        {
          text: "Tests approfondis de compatibilité et performances.",
          enabled: true,
        },
      ] as Feature[],
    },
    {
      title: "Avancée",
      subtitle:
        "Une solution complète et évolutive idéale pour les entreprises ayant des besoins spécifiques.",
      price: "Sur devis",
      features: [
        { text: "Fonctionnalité de l’offre Standard", enabled: true },
        {
          text: "Développement d’applications natives (iOS avec Swift et Android avec React Native).",
          enabled: true,
        },
        {
          text: "Fonctionnalités avancées : Géolocalisation, paiements sécurisés, systèmes de réservation ou gestion de contenu dynamique. ",
          enabled: true,
        },
        { text: "Intégration blog & Newsletter", enabled: true },
        {
          text: "Intégration intelligence artificielle selon votre besoin.",
          enabled: true,
        },
        {
          text: "Suivi des performances après le lancement.",
          enabled: true,
        },
      ] as Feature[],
    },
    {
      title: "Personnalisée",
      subtitle: "Parfait pour les grandes entreprise ou boutique e-commerce",

      price: "Sur devis",
      features: [
        { text: "Analyse personnalisée", enabled: true },
        {
          text: "Prestation spécifique à la demande",
          enabled: true,
        },
        { text: "Intégration complexe", enabled: true },
        { text: "Suivi et support dédiés", enabled: true },
      ] as Feature[],
    },
  ];
  return (
    <section>
      <Image
        src={"/img/blur-bluePurple.webp"}
        alt=""
        width={400}
        height={1200}
        priority
        className="absolute md:h-auto md:mt-0 h-[55rem] w-full md:w-[35rem] right-0 bottom-0 -z-10 object-cover"
        quality={100}
      />

      {/* Pricing section header */}
      <div className="text-center mt-12 md:mt-20">
        <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
          Développement d&apos;application mobile
        </h2>
      </div>
      {/* Pricing cards container */}
      <div className="mt-16 lg:mt-28 mb-24 lg:mb-36 flex flex-col lg:flex-row justify-center items-stretch gap-6 lg:gap-8">
        {cmsPrice.map((plan, index) => (
          <div
            key={index}
            className="w-full lg:w-auto flex-shrink-0 lg:flex-shrink"
          >
            <PricingCard
              {...plan}
              buttonHref="https://tidycal.com/boughanmieddy8/audit-de-votre-projet"
              className="h-full mb-8 max-w-sm mx-auto"
            />
          </div>
        ))}
      </div>

      {/* Portfolio section */}
      <div className="text-center mt-32 md:mt-60">
        <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4 sm:mb-6">
          Nos réalisations
        </h2>
        <h3 className="lg:text-6xl text-3xl font-bold text-center lg:mb-20 mb-10">
          A la pointe de l&apos;innovation digitale
        </h3>
        <div className="w-full overflow-hidden">
          <Carousel />
        </div>
      </div>
    </section>
  );
}

export interface ProcessStep {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: "Audit & Analyse",
    description:
      "Analyse approfondie de vos besoins, de votre marché et de vos objectifs pour créer une stratégie digitale sur-mesure.",
    imageSrc: "/img/audit.webp",
    imageAlt: "Audit et analyse",
  },
  {
    title: "Design & Prototypage",
    description:
      "Création de maquettes interactives et de prototypes avant le développement.",
    imageSrc: "/img/designetprototypage.webp",
    imageAlt: "Design et prototypage",
  },
  {
    title: "Développement",
    description:
      "Intégration technique avec les dernières technologies pour une solution performante, sécurisée et évolutive.",
    imageSrc: "/img/developper.webp",
    imageAlt: "Développement",
  },
  {
    title: "Lancement",
    description:
      "Mise en ligne, référencement SEO et optimisation continue pour maximiser votre visibilité et vos conversions.",
    imageSrc: "/img/lancement.webp",
    imageAlt: "Lancement et optimisation",
  },
  {
    title: "Accompagnement",
    description:
      "Support technique continu, formations et évolutions pour garantir le succès à long terme de votre projet.",
    imageSrc: "/img/accompagnements.webp",
    imageAlt: "Accompagnement",
  },
];

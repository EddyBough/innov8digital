export interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar?: string; // URL de l'image (optionnel, fallback sur initiales)
}

export const testimonials: TestimonialProps[] = [
  {
    quote:
      "Je recommande INNOV8 DIGITAL sans hésiter. Ravis de nos projets avec eux.",
    name: "Fahari Hamada Sidi",
    title: "Développeur Fullstack",
    company: "MKL Devops",
    avatar: "/img/fahari-pic.webp",
  },
  {
    quote:
      "De la maquette à la livraison, ils ont su nous accompagner et nous donner des conseils pour améliorer notre offre et notre site web.",
    name: "Rémi Tabourel",
    title: "CEO",
    company: "MP Solutions",
    avatar: "/img/remi-pic.webp",
  },
  {
    quote:
      "Ils ont automatisé mon site web, mes demandes de pose de borne de recharge et ma GMB, je gagne des clients et 10h de travail par semaine !",
    name: "Baptiste Hennecart",
    title: "Chef d'entreprise",
    company: "AIM Services",
    avatar: "/img/baptiste-pic.webp",
  },
  {
    quote:
      "Ils nous ont aidé à nous digitaliser, nous avons gagné des licenciés et exposition grâce à leur expertise !",
    name: "Pierre Moreau",
    title: "ASAC",
    company: "Club de football",
    avatar: "/img/asac-logo.webp",
  },
  {
    quote:
      "Ils m'ont aidé à me digitaliser grâce à leur expertise, je gagne des clients et ils m'ont aidée à structurer une offre de service optimisée !",
    name: "Khadija Mrad",
    title: "Chef d'entreprise",
    company: "Stellar Propreté",
    avatar: "/img/logo-stellar.svg",
  },
  {
    quote:
      "Merci à INNOV8 Digital, j'ai longtemps érré à trouver de vrais développeurs. On ne se lâche plus !",
    name: "Vincent Rispoli",
    title: "Chef d'entreprise",
    company: "Provence Tech",
    avatar: "/img/provencetech.webp",
  },
];

// Clients pour le ClientSocialProof - séparé du composant (principe DRY)
export interface ClientSocialProofItem {
  name: string;
  company: string;
  avatar: string;
}

export const clientsSocialProof: ClientSocialProofItem[] = [
  {
    name: "Fahari Hamada Sidi",
    company: "MKL Devops",
    avatar: "/img/fahari-pic.webp",
  },
  {
    name: "Rémi Tabourel",
    company: "MP Solutions",
    avatar: "/img/remi-pic.webp",
  },
  {
    name: "Baptiste Hennecart",
    company: "AIM Services",
    avatar: "/img/baptiste-pic.webp",
  },
  {
    name: "Vincent Rispoli",
    company: "Provence Tech",
    avatar: "/img/provencetech.webp",
  },
];

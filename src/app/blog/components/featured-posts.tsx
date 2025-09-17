"use client";

import { BlogCard } from "./blog-card";

const posts = [
  {
    title:
      "Automatisation d'entreprise 2025 : RAG, MCP et IA au service de votre productivité",
    excerpt:
      "Découvrez comment les systèmes RAG, les protocoles MCP et l'IA conversationnelle révolutionnent l'automatisation des processus métier en 2025.",
    image: "/img/aiapps.webp",
    date: "4 Août 2025",
    category: "Automatisation",
    slug: "automatisation-entreprise-2025",
  },
  {
    title: "L'évolution de l'intelligence artificielle en 2025",
    excerpt:
      "ChatGPT, Claude, DeepMind etc... Ils sont en train de créer un nouveau monde, voici comment en tirer le maximum pour vos business.",
    image: "/img/aiapps.webp",
    date: "20 Janvier 2025",
    category: "Innovation",
    slug: "evolution-ia-2025",
  },
  {
    title: "Comment bien choisir son agence digitale",
    excerpt:
      "Travailler avec une agence digitale composée de développeurs diplômés apporte une garantie de qualité, de performance et d'innovation. On vous dit pourquoi cela fait toute la différence. ",
    image: "/img/man-thinking.webp",
    date: "20 Janvier 2025",
    category: "Développement",
    slug: "investir-agence-digitale-2025",
  },
];

export function FeaturedPosts() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.slug} {...post} />
      ))}
    </div>
  );
}

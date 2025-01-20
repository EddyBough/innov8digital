"use client";

import { BlogCard } from "./blog-card";

const posts = [
  {
    title: "L'évolution de l'intelligence artificielle en 2025",
    excerpt:
      "ChatGPT, Claude, DeepMind etc... Ils sont en train de créer un nouveau monde, voici comment en tirer le maximum pour vos business.",
    image: "/img/aiapps.jpg",
    date: "20 Janvier 2024",
    category: "SEO",
    slug: "evolution-ia-2025",
  },
  {
    title: "Comment bien choisir son agence digitale",
    excerpt:
      "Travailler avec une agence digitale composée de développeurs diplômés apporte une garantie de qualité, de performance et d'innovation. On vous dit pourquoi cela fait toute la différence. ",
    image: "/img/man-thinking.jpg",
    date: "19 Janvier 2024",
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

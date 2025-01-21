"use client";

import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  slug: string;
}

export function BlogCard({
  title,
  excerpt,
  image,
  date,
  category,
  slug,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
        <Card className="overflow-hidden bg-white/50 backdrop-blur-sm border border-gray-200">
          <div className="relative h-48 w-full">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>

          <div className="p-6 text-left space-y-4">
            <time dateTime={date} className="text-sm text-gray-500 block">
              {date}
            </time>
            <h3 className="text-xl font-semibold text-gray-900 leading-snug">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{excerpt}</p>
          </div>
          <div className="mt-4 ml-6">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
              {category}
            </span>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
}
